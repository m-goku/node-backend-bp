import mongoose from "mongoose"
require("dotenv").config()

export const dbConnect = () => {
    if(process?.env?.DB_URI){
        mongoose.connect(process?.env?.DB_URI)
        .then(() => console.log("db connected"))
        .catch((e) => console.log(e))
    }
}