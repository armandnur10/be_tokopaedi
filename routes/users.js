var express = require('express');
const gadgetController = require('../controller/GadgetController');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/gadget', gadgetController.barang)
router.post('/gadget', gadgetController.post)
router.get('/gadget/:id', gadgetController.getById)
router.put('/gadget/:id', gadgetController.update)
router.delete('/gadget/:id', gadgetController.delete)

module.exports = router;
