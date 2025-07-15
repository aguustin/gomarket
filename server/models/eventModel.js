import mongoose from "mongoose";

const eventModel = mongoose.Schema({
    token:{type:String},
    nombreComple:{type: String},
    dni:{type: Number},
    used:{type:Boolean}
})

export default mongoose.model('event', eventModel)