import Sequelize from 'sequelize';

const sequelize = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    port: 55002,
    database: 'xpe-bookstore',
    username: 'postgres',
    password: 'mysecretpassword',
    define: {
        timestamps: false,
    },
});

export default sequelize;
