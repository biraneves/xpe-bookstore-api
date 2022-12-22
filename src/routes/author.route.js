import express from 'express';

import AuthorController from '../controllers/author.controller.js';

const router = express.Router();

router.post('/', AuthorController.insertAuthor);
router.put('/', AuthorController.updateAuthor);
router.get('/', AuthorController.selectAuthors);
router.get('/:id', AuthorController.selectAuthor);

export default router;
