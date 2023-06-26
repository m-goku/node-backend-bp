import express from "express"
import { newController } from "../controllers/new.controllers"

export const newRouter = express.Router()


newRouter.get("/" , newController )