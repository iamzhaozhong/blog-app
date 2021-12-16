import { Router } from 'express';
import * as controllers from '../controllers/posts.js';

const router = Router()

router.get('/products', controllers.getPosts)
router.get('/products/:id', controllers.getPost)
router.post('/products', controllers.createPost)
router.put('/products/:id', controllers.editPost)
router.delete('/products/:id', controllers.deletePost)

export default router