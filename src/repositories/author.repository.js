import Author from '../models/Author.model.js';

const insertAuthor = async (author) => {
    try {
        return await Author.create(author);
    } catch (err) {
        throw err;
    }
};

const updateAuthor = async (author) => {
    try {
        return await Author.update(author, {
            where: {
                authorId: author.authorId,
            },
        });
    } catch (err) {
        throw err;
    }
};

const selectAuthors = async () => {
    try {
        return await Author.findAll();
    } catch (err) {
        throw err;
    }
};

const selectAuthor = async (authorId) => {
    try {
        return await Author.findByPk(authorId);
    } catch (err) {
        throw err;
    }
};

export default {
    insertAuthor,
    updateAuthor,
    selectAuthors,
    selectAuthor,
};
