import { Request, Response } from "express";

export const newController = (req: Request, res: Response) => {
    res.json({ message: "new route created" })
}