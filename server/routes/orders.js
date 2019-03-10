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


module.exports = router;