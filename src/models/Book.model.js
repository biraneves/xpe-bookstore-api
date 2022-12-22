import Sequelize from 'sequelize';
import db from '../repositories/db.js';

const Book = db.define('books', {
    bookId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    title: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    price: {
        type: Sequelize.DOUBLE,
        allowNull: false,
    },
    stock: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    authorId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
});

export default Book;
