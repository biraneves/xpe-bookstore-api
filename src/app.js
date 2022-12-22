import express from 'express';
import winston from 'winston';

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
const logger = winston.createLogger({
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
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).send(okMessage);
});

app.listen(PORT, () => {
    logger.info(okMessage);
});
