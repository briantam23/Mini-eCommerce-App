const router = require('express').Router();
const { Order, LineItem } = require('../db').models;
const { conn } = require('../db');


//get all orders
router.get('/', async (req, res, next) => {
    const attr = {
        status: 'CART'
    }
    try {
        let cart = await Order.findOne({ where: attr })
        if(!cart) {
            cart = await Order.create(attr);
        }
        const orders = await Order.findAll({
            include: [ LineItem ],
            order: [['createdAt', 'DESC']]
        })
        res.send(orders);
    }
    catch(ex) {
        next(ex)
    }
})

// create line item
router.post('/:orderId/lineItems', (req, res, next) => {
    LineItem.create({
        orderId: req.params.orderId,
        quantity: req.body.quantity,
        productId: req.body.productId
    })
        .then(lineItem => res.send(lineItem))
        .catch(next)
})

// update line item
router.put('/:orderId/lineItems/:lineItemId', (req, res, next) => {
    LineItem.findByPk(req.params.lineItemId)
        .then(lineItem => lineItem.update(req.body))
        .then(lineItem => res.send(lineItem))
        .catch(next)
})

// delete line item
router.delete('/:orderId/lineItems/:lineItemId', (req, res, next) => {
    LineItem.destroy({ 
        where: {
            orderId: req.params.orderId,
            id: req.params.lineItemId
        }
    })
        .then(() => res.sendStatus(204))
        .catch(next)
})


module.exports = router;