var express = require('express');
var router = express.Router();
const areaController = require('../controllers/area.controllers');


/* GET home page. */
router.post('/', areaController.create);
router.get('/', areaController.getAll);
router.get('/:id', areaController.getById);
router.patch('/:id', areaController.updateById);
router.delete('/:id', areaController.deleteById);

module.exports = router;