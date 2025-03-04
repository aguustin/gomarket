import axios from "axios"

export const createBlogRequest = (blogData) => axios.post('http://127.0.0.1:4000/createBlog', blogData)

export const updateBlogRequest = (blogData) => axios.post('http://127.0.0.1:4000/updateBlog', blogData)

export const getAllBlogsRequest = () => axios.get('http://127.0.0.1:4000/getAllBlogs')

export const getBlogByIdRequest = (blogId) => axios.get(`http://127.0.0.1:4000/Blogs/${blogId}`)

export const deleteBlogRequest = (blogId) => axios.put(`http://127.0.0.1:4000/deleteBlog/${blogId}`)
