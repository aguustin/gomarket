import { Router } from "express";
import { deleteBlogController, createBlogController, updateBlogController, getAllBlogsController, getBlogByIdController } from "../controllers/blogController.js";
import multer from "multer"

const router = Router()
const storage = multer.memoryStorage()
const upload = multer({storage: storage})

router.post('/createBlog', upload.single('blogImg'), createBlogController)

router.post('/updateBlog', upload.single('blogImg'), updateBlogController)

router.get('/getAllBlogs', getAllBlogsController)

router.get('/Blogs/:blogId', getBlogByIdController)

router.get('/deleteBlog/:blogId', deleteBlogController)


export default router