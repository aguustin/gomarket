import axios from "axios"

export const signInRequest = (userData) => axios.post('https://https://gomarket-xs2f.onrender.com/signIn', userData)

export const loginRequest = (loginData) => axios.post('https://https://gomarket-xs2f.onrender.com/login', loginData)

export const getUsersRequest = () => axios.get('https://https://gomarket-xs2f.onrender.com/getUsers')


/*export const signInRequest = (userData) => axios.post('http://127.0.0.1:4000/signIn', userData)

export const loginRequest = (loginData) => axios.post('http://127.0.0.1:4000/login', loginData)

export const getUsersRequest = () => axios.get('http://127.0.0.1:4000/getUsers')*/