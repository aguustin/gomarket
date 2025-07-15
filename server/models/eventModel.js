import mongoose from "mongoose";

const blogModel = mongoose.Schema({
    token:{type:String},
    used:{type:Boolean}
})

export default mongoose.model('blog', blogModel)