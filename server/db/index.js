const conn = require('./conn');
const Product = require('./models/Product');


const syncAndSeed = () => {
    conn.sync({ force: true })
        .then(() => Promise.all([
            Product.create({ name: 'MacBook Air' }),
            Product.create({ name: 'iPhone 8' }),
            Product.create({ name: 'Hershel Backpack' })
        ]))
}


module.exports = {
    syncAndSeed,
    models: {
        Product
    },
    conn
}