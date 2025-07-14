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
    const [isVisible, setVisible] = useState(false)
    const [animate, setAnimate] = useState(false)
    const [changeNav, setChangeNav] = useState(false)

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

    const openFormFunc = () => {
        setVisible(!isVisible)
        setAnimate(false)

        setTimeout(() => {
            setAnimate(true)
        }, 50)
        console.log(isVisible)
    }

    return(
        <UserContext.Provider value={{changeNav, setChangeNav, session, setSession, blogs, setBlogs, createBlogForm, setCreateBlogForm, loginContext, isVisible, setVisible, animate, setAnimate, openFormFunc}}>{children}</UserContext.Provider>
    )
}

export default UserContext