var express = require('express');
var router = express.Router();
var Noticias = require('../models/noticia');

/* GET home page. */
router.get('/', async function(req, res, next) {
  var noticias = await Noticias.find();
  res.json(noticias);
});

router.get('/visualizar', async function(req, res, next) {
var visualizar = await Noticias.findById(req.query.id);
res.json(visualizar);

});

router.get('/contador', async function(req, res, next) {
var contador = await Noticias.find().count()
res.json({quantidade: contador});

});

module.exports = router;