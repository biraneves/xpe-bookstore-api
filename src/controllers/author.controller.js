import AuthorService from '../services/author.service.js';

const insertAuthor = async (req, res, next) => {
    try {
        let author = req.body;

        if (!author.name || !author.email || !author.phoneNumber) {
            throw new Error('Name, email and phoneNumber are required.');
        }

        author = await AuthorService.insertAuthor(author);
        res.send(author);
        logger.info(`POST /author - ${JSON.stringify(author)}`);
    } catch (err) {
        next(err);
    }
};

const updateAuthor = async (req, res, next) => {
    try {
        const author = req.body;

        if (
            !author.authorId ||
            !author.name ||
            !author.email ||
            !author.phoneNumber
        ) {
            throw new Error(
                'AuthorId, name, email and phoneNumber are required.',
            );
        }

        await AuthorService.updateAuthor(author);
        res.send(author);
        logger.info(`PUT /author - ${JSON.stringify(author)}`);
    } catch (err) {
        next(err);
    }
};

const selectAuthors = async (req, res, next) => {
    try {
        res.send(await AuthorService.selectAuthors());
        logger.info('GET /author');
    } catch (err) {
        next(err);
    }
};

const selectAuthor = async (req, res, next) => {
    try {
        const authorId = req.params.id;

        res.send(await AuthorService.selectAuthor(authorId));
        logger.info(`GET /author/${authorId}`);
    } catch (err) {
        next(err);
    }
};

export default {
    insertAuthor,
    updateAuthor,
    selectAuthors,
    selectAuthor,
};
