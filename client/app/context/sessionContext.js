"use client"

import { getAllBlogsRequest } from "../api/blogApi";
import { loginRequest } from "../api/userApi";
import { redirect } from 'next/navigation'

const { createContext, useState, useEffect } = require("react");

const UserContext = createContext();

export const UserContextProvider = ({children}) => {

    const [session, setSession] = useState([])
    const [createBlogForm, setCreateBlogForm] = useState(false)
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        const useGet = async () => {
            const localExist = JSON.parse(localStorage.getItem('session'))
            const res = await getAllBlogsRequest()
            setBlogs(res.data)
            console.log(res.data)
            if(localExist){
                setSession(JSON.parse(localStorage.getItem('session')))
            }

        }
        useGet()
    }, [])

    const loginContext = async (loginData) => {
        console.log(loginData)
       const res = await loginRequest(loginData)

       if(res.data.length > 0){
            localStorage.setItem('session', JSON.stringify(res.data))
            setSession(JSON.parse(localStorage.getItem('session')))
            redirect('/Blogs')
       }
        
    }

    return(
        <UserContext.Provider value={{session, setSession, blogs, setBlogs, createBlogForm, setCreateBlogForm, loginContext}}>{children}</UserContext.Provider>
    )
}

export default UserContext