const express = require('express');
const ingressoController = require('../controllers/ingressoController');

const router = express.Router();

router.get('/ingresso', ingressoController.getAllIngressos);
router.get('/ingresso/:id', ingressoController.getIngressoById);
router.post('/ingresso', ingressoController.createIngresso);
router.put('/ingresso/:id', ingressoController.updateIngresso);
router.delete('/ingresso/:id', ingressoController.deleteIngresso);
router.post('/ingresso/:id/venda', ingressoController.vendaIngresso);

module.exports = router;
