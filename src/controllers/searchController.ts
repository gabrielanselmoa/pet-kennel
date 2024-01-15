
import { Request, Response } from "express";

export const search = ((req: Request, res: Response) => {
    // res.render("Search Home Controller")
    res.send("Search Home Controller")
})