import axios from "axios"

export const createBlogRequest = (blogData) => axios.post('http://100.20.92.101:4000/createBlog', blogData)

export const updateBlogRequest = (blogData) => axios.post('http://100.20.92.101:4000/updateBlog', blogData)

export const getAllBlogsRequest = () => axios.get('http://100.20.92.101:4000/getAllBlogs')

export const getBlogByIdRequest = (blogId) => axios.get(`http://100.20.92.101:4000/Blogs/${blogId}`)

export const deleteBlogRequest = (blogId) => axios.put(`http://100.20.92.101:4000/deleteBlog/${blogId}`)
