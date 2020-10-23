const { Router } = require("express");
const router = Router();

const { showPedidos, 
    createPedido,
    updateEntrega, 
    } = require('../controllers/pedidos');

router.route('/').get(showPedidos)
            .post(createPedido);
            
router.route('/:id').put(updateEntrega);



module.exports = router;        