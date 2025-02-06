import axios from "axios"

export const createBlogRequest = () => axios.post('/createBlog', createBlogController)

export const updateBlogRequest = () => axios.post('/updateBlog', updateBlogController)

export const deleteBlogRequest = () => axios.get('/deleteBlog', deleteBlogController)
