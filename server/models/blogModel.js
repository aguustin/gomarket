import mongoose from "mongoose";

const blogSchema = mongoose.Schema({
    image:{type:String},
    title:{type:String},
    description:{type:String}
})

export default mongoose.model('blog', blogSchema)