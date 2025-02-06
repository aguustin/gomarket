import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username: {type: String},
    password: {type: String},
    rol:{type: Number}
})

export default mongoose.model('user', userSchema)