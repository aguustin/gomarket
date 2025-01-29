"use client"
const { createContext, useState } = require("react");

const UserContext = createContext();

export const UserContextProvider = ({children}) => {

    const [session, setSession] = useState([])


    return(
        <UserContext.Provider value={{session}}>{children}</UserContext.Provider>
    )
}

export default UserContext