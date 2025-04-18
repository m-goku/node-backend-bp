import { Request, Response } from "express";

export const newController = (req: Request, res: Response) => {
    try {
        res.json({ message: "new route created" })

    } catch (error) {

    }
}