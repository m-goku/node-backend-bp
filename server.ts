import express from "express"
import { dbConnect } from "./db/db.connection"
import { newRouter } from "./routes/new.routes"
require("dotenv").config()


const app = express()

app.use("/new", newRouter)

app.listen(3000, () => {
    if (process?.env?.ENVIRONMENT === "Local") {
        console.log("localhost running ...")
    } else if (process?.env?.ENVIRONMENT === "Database") {
        dbConnect
    } else {
        console.log("environment type not set")
    }
})