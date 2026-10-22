const express = require('express');
const router = express.Router();
const clientesController = require('../controllers/clientesController');

router.get('/', clientesController.listarClientes);
router.get('/cidade/:cidade', clientesController.listarPorCidade);
router.get('/:id', clientesController.buscarPorId);
router.get('/:id/pedidos', clientesController.listarPedidos);
router.put('/:id', clientesController.atualizarCliente);
router.post('/:id/pedidos', clientesController.adicionarPedido);
router.delete('/:id', clientesController.removerCliente);

module.exports = router;
