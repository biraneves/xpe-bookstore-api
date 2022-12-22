import express from 'express';

const app = express();
const PORT = 3000;
const okMessage = `Server OK. Listening on port ${PORT}.`;

app.use(express.json());

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).send(okMessage);
});

app.listen(PORT, () => console.log(okMessage));
