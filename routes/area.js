var express = require('express');
var router = express.Router();
const areaController = require('../controllers/area.controllers');
const userController = require('../controllers/user.controller');


/* GET home page. */
router.post('/', userController.isAuthenticated, areaController.create);
router.get('/',  userController.isAuthenticated, areaController.getAll);
router.get('/:id', userController.isAuthenticated, areaController.getById);
router.patch('/:id', userController.isAuthenticated, areaController.updateById);
router.delete('/:id',userController.isAuthenticated, areaController.deleteById);

module.exports = router;