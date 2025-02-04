import mongoose from "mongoose";
import { MONGO_URI } from "./config.js";


const connection = async () => {
    try {
        await mongoose.connect(MONGO_URI)
    } catch (error) {
        console.log(error)
    }
}

export default connection