import axios from "axios"

export const signInRequest = (userData) => axios.post('/signIn', userData)

export const loginRequest = (credentials) => axios.get('/login', credentials)

export const getUsersRequest = () => axios.get('/getUsers')