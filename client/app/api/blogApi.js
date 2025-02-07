import axios from "axios"

export const createBlogRequest = (blogData) => axios.post('/createBlog', blogData)

export const updateBlogRequest = (blogData) => axios.post('/updateBlog', blogData)

export const getAllBlogsRequest = () => axios.get('/getAllBlogs')

export const deleteBlogRequest = (blogId) => axios.put(`/deleteBlog/${blogId}`)
