import Sequelize from 'sequelize';
import db from '../repositories/db.js';

const Author = db.define('authors', {
    authorId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    phoneNumber: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

export default Author;
