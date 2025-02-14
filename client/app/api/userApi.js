import axios from "axios"

export const signInRequest = (userData) => axios.post('http://100.20.92.101:4000/signIn', userData)

export const loginRequest = (loginData) => axios.post('http://100.20.92.101:4000/login', loginData)

export const getUsersRequest = () => axios.get('http://100.20.92.101:4000/getUsers')