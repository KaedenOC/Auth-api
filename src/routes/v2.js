'use strict';

const express = require('express');
const dataModules = require('../models');

const basicAuth = require('../auth/middleware/basic');
const bearerAuth = require('../auth/middleware/bearer');
const acl = require('../auth/middleware/acl');


const router = express.Router();

router.param('model', (req, res, next) => {
  const modelName = req.params.model;
  if (dataModules[modelName]) {
    req.model = dataModules[modelName];
    next();
  } else {
    next('Invalid Model');
  }
});

router.get('/:model', basicAuth, handleGetAll);
router.get('/:model/:id', basicAuth, handleGetOne);
router.post('/:model', bearerAuth, acl('create'), handleCreate);
router.patch('/:model', bearerAuth, acl('update'), handleUpdate);
router.put('/:model/:id', bearerAuth, acl('update'), handleUpdate);
router.delete('/:model/:id', bearerAuth, acl('delete'), handleDelete);

async function handleGetAll(req, res, next) {
  try {
    let allRecords = await req.model.get();
    res.status(200).json(allRecords);

  } catch (error) {
    next(error.message);
  }
}

async function handleGetOne(req, res, next) {
  try {
    const id = req.params.id;
    let theRecord = await req.model.get(id);
    res.status(200).json(theRecord);

  } catch (error) {
    next(error.message);
  }
}

async function handleCreate(req, res, next) {
  try {
    let obj = req.body;
    let newRecord = await req.model.create(obj);
    res.status(201).json(newRecord);

  } catch (error) {
    next(error.message);
  }
}

async function handleUpdate(req, res, next) {
  try {
    const id = req.params.id;
    const obj = req.body;
    let updatedRecord = await req.model.update(id, obj);
    res.status(200).json(updatedRecord);

  } catch (error) {
    next(error.message);
  }
}

async function handleDelete(req, res, next) {
  try {
    let id = req.params.id;
    let deletedRecord = await req.model.delete(id);
    res.status(200).json(deletedRecord);

  } catch (error) {
    next(error.message);
  }
}


module.exports = router;
