const express = require('express');
const router = express.Router();
const Roles = require('../models/Roles');

router.post('/add', async function(req, res) {
  const data = req.body;
  let result = {};
  const obj = {
    name: data.name,
    createdAt: new Date(),
    modifiedAt: new Date(),
  };
  const add = await Roles.create(obj);
  if (add) {
    result = {
      status: 'ok',
      info: 'Role is added',
      data: {},
    };
  } else {
    result = {
      status: 'error',
      info: 'Role not added',
    };
  }
  return res.json(result);
});

router.post('/edit', async function(req, res) {
  const data = req.body;
  let result = {};
  const edit = await Roles.findByIdAndUpdate(data.id, { name: data.name, modifiedAt: new Date() });
  if (edit) {
    result = {
      status: 'ok',
      info: 'Role is edited',
      data: {},
    };
  } else {
    result = {
      status: 'error',
      info: 'Role is not edited',
    };
  }
  return res.json(result);
});

router.delete('/del', async function(req, res) {
  const data = req.body;
  let result = {};
  const del = await Roles.findByIdAndDelete(data.id);
  if (del) {
    result = {
      status: 'ok',
      info: 'Role is deleted',
      data: {},
    };
  } else {
    result = {
      status: 'error',
      info: 'Role is not deleted',
    };
  }
  return res.json(result);
});

router.post('/list', async function(req, res) {
  const list = await Roles.find({}).select('name');
  return res.json(list);
});
module.exports = router;
