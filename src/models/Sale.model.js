import Sequelize from 'sequelize';
import db from '../repositories/db.js';

const Sale = db.define(
    'sales',
    {
        saleId: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        amount: {
            type: Sequelize.DOUBLE,
            allowNull: false,
        },
        date: {
            type: Sequelize.DATE,
            allowNull: false,
        },
        customerId: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        bookId: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
    },
    { underscored: true },
);

export default Sale;
