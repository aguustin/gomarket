import axios from "axios"

export const signInRequest = (userData) => axios.post('https://gomarket-1.onrender.com/signIn', userData)

export const loginRequest = (loginData) => axios.post('https://gomarket-1.onrender.com/login', loginData)

export const getUsersRequest = () => axios.get('https://gomarket-1.onrender.com/getUsers')


/*export const signInRequest = (userData) => axios.post('http://127.0.0.1:4000/signIn', userData)

export const loginRequest = (loginData) => axios.post('http://127.0.0.1:4000/login', loginData)

export const getUsersRequest = () => axios.get('http://127.0.0.1:4000/getUsers')*/