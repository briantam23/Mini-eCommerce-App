const Sequelize = require('sequelize');
const conn = new Sequelize(
    process.env.DATABASE_URL || 
    'postgres://localhost/Mini-eCommerce-App', { logging: false }
);


module.exports = conn;