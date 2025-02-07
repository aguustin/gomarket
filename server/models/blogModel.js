import mongoose from "mongoose";

const blogModel = mongoose.Schema({
    image:{type:String},
    title:{type:String},
    description:{type:String},
    blogDate:{type: Date}
})

export default mongoose.model('blog', blogModel)