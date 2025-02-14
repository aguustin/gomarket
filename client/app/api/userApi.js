import axios from "axios"

export const signInRequest = (userData) => axios.post('http://200.32.101.183:4000/signIn', userData)

export const loginRequest = (loginData) => axios.post('http://200.32.101.183:4000/login', loginData)

export const getUsersRequest = () => axios.get('http://200.32.101.183:4000/getUsers')