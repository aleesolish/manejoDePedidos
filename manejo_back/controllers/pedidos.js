const pedidoCtrl = {};
const Pedido = require("../models/pedidos");

pedidoCtrl.showPedidos = async (req, res) => {
  await Pedido.all()
    .then((data) => {
      let pedidos = data;
      res.json(pedidos);
    })
    .catch((err) => {
      console.log(err);
    });
};

pedidoCtrl.createPedido = async (req, res) => {
  let pedido = {};
  pedido.name = req.body.name;
  pedido.time = new Date();
  console.log(pedido);
  await Pedido.create(pedido)

    .then((id) => {
      res.json({ id: id });
    })
    .catch((err) => {
      console.log(err);
    });
};

pedidoCtrl.updateEntrega = async (req, res) => {
  let pedido = {};
  pedido.id = (req.params.id);
  pedido.time = new Date();
  let entrega = {}
  entrega.id = req.body.id;

  return await Pedido.updateEntrega(pedido, entrega)
    .then(() => {
      res.json("Actualizado");
    })
    .catch((err) => {
    });
};

module.exports = pedidoCtrl;