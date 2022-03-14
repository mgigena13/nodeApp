var express = require('express');
var router = express.Router();
const productosController = require("../controllers/productosControllers");

/* GET users listing. */
router.get('/', productosController.getAll);
router.get('/:id', productosController.getById);
router.post('/', productosController.create);
router.put('/:id', productosController.uptade);
router.delete('/:id', productosController.delete);
module.exports = router;
