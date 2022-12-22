import AuthorRepository from '../repositories/author.repository.js';

const insertAuthor = async (author) => {
    return await AuthorRepository.insertAuthor(author);
};

const updateAuthor = async (author) => {
    return await AuthorRepository.updateAuthor(author);
};

const selectAuthors = async () => {
    return await AuthorRepository.selectAuthors();
};

const selectAuthor = async (authorId) => {
    return await AuthorRepository.selectAuthor(authorId);
};

export default {
    insertAuthor,
    updateAuthor,
    selectAuthors,
    selectAuthor,
};
