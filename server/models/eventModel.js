import mongoose from "mongoose";

const eventModel = mongoose.Schema({
    token:{type:String},
    used:{type:Boolean}
})

export default mongoose.model('event', eventModel)