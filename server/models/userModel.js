import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    mail:{type: String},
    username: {type: String},
    password: {type: String},
    country:{type:String},
    rol:{type: Number}
})

export default mongoose.model('user', userSchema)