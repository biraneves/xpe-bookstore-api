import express from 'express';
import winston from 'winston';

import customersRouter from './routes/customer.route.js';
import authorsRouter from './routes/author.route.js';

// Server
const app = express();
const PORT = 3000;
const okMessage = `Server OK. Listening on port ${PORT}.`;

app.use(express.json());

// Logger
const { combine, timestamp, label, printf } = winston.format;
const logFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] ${level}: ${message}`;
});
global.logger = winston.createLogger({
    level: 'silly',
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'xpe-bookstore-api.log' }),
    ],
    format: combine(
        label({ label: 'xpe-bookstore-api' }),
        timestamp(),
        logFormat,
    ),
});

// Router
app.use('/customer', customersRouter);
app.use('/author', authorsRouter);

app.use((err, req, res, next) => {
    if (err.message) {
        logger.error(`${req.method} ${req.baseUrl} - ${err.message}`);
        res.status(400).send({ error: err.message });
    } else {
        logger.error(`${req.method} ${req.baseUrl} - ${err}`);
        res.status(400).send({ error: err });
    }
});

app.listen(PORT, () => {
    logger.info(okMessage);
});
