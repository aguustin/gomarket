import userModel from "../models/userModel.js"
import bcrypt from "bcrypt"

export const signInController = async (req, res) => {

    const {mail, username, password, country} = req.body

    
    const findUser = await userModel.find({mail: mail})

    
    if(findUser.length > 0){
        res.status(401).json({exists: 1})
    }else{

        
        const encryptPass = await bcrypt.hash(password, 10)

        await userModel.create({
            mail:mail, 
            username:username, 
            password:encryptPass,
            country:country,
            rol:1
        })
        res.sendStatus(200)
    }

}

export const loginController = async (req, res) => {
    const {username, password} = req.params

    const findUser = await userModel.find({username: username})

    if(findUser.length > 0){
        const desencryptPass = await bcrypt.compare(password, findUser[0].password)
        desencryptPass ? res.send(findUser) : res.status(401).json({user: 0})
    }else{
        res.status(401).json({notExist: 0})
    }

}

export const getUsersController = async (req, res) => {
    const getUsers = await userModel.find()
    res.send(getUsers)
}