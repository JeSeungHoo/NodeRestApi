import express from 'express';

import * as feedController from '../controllers/feed.js';

const router = express.Router();

router.get('/posts', feedController.getPosts);

router.post('/posts', feedController.createPost);

export default router;