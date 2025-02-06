import { Router } from "express";
import { deleteBlogController, createBlogController, updateBlogController } from "../controllers/blogController.js";

const router = Router()

router.post('/createBlog', createBlogController)

router.post('/updateBlog', updateBlogController)

router.get('/deleteBlog', deleteBlogController)


export default router