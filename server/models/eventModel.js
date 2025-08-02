import mongoose from "mongoose";

const eventModel = mongoose.Schema({
    token:{type:String},
    nombreCompleto:{type: String},
    dni:{type: Number},
    used:{type:Boolean},
    mail: {type: String}
})

export default mongoose.model('event', eventModel)
