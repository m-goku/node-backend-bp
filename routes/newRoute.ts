import express from "express"
import { newController } from "../controllers/newController"

export const newRouter = express.Router()


newRouter.get("/" , newController )