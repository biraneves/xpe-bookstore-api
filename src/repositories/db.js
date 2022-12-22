import Sequelize, { ARRAY } from 'sequelize';
import Author from '../models/Author.model.js';
import Book from '../models/Book.model.js';
import Customer from '../models/Customer.model.js';
import Sale from '../models/Sale.model.js';

const sequelize = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    port: 55002,
    database: 'xpe-bookstore',
    username: 'postgres',
    password: 'mysecretpassword',
    logging: 'false',
});

const author = Author(sequelize, Sequelize.DataTypes);
const book = Book(sequelize, Sequelize.DataTypes);
const customer = Customer(sequelize, Sequelize.DataTypes);
const sale = Sale(sequelize, Sequelize.DataTypes);

author.hasMany(book);
book.belongsTo(author);

customer.hasMany(sale);
book.hasMany(sale);
sale.belongsTo(customer);
sale.belongsTo(book);

export default sequelize;
