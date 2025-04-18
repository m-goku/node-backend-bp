import express from "express"
import { dbConnect } from "./db/dbConnection"
import { newRouter } from "./routes/newRoute"
require("dotenv").config()



const app = express()

app.use("/new", newRouter)

app.listen(3000, () =>  dbConnect())