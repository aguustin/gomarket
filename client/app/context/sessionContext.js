"use client"
const { createContext, useState } = require("react");

const UserContext = createContext();

export const UserContextProvider = ({children}) => {

    const [session, setSession] = useState([])
    const [createBlogForm, setCreateBlogForm] = useState(false)

    return(
        <UserContext.Provider value={{session, createBlogForm, setCreateBlogForm}}>{children}</UserContext.Provider>
    )
}

export default UserContext