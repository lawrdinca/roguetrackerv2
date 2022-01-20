import express from 'express';

import { getPosts, getPost, createPost, updatePost, reportPost, deletePost } from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
router.get('/:id', getPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/reportPost', reportPost);

export default router;