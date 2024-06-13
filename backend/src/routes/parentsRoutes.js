const express = require('express');
const { getParentsController, getParentByIdController, createParentController } = require('../controllers/parentsController');
const routerParents = express.Router()



routerParents.get('/parents', getParentsController)
routerParents.get('/parents/:id', getParentByIdController)
routerParents.post("/parents", createParentController)

module.exports = routerParents;