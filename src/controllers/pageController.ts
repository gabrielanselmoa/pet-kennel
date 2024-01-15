
import { Request, Response } from "express";

export const home = ((req: Request, res: Response) => {
    // res.render("Page Home Controller")
    // res.render -> It's responsible to redenring the FILE VIEW

    res.send("Page Home Controller")

})
export const dogs = ((req: Request, res: Response) => {
    // res.render("Home")
})
export const cats = ((req: Request, res: Response) => {
    // res.render("Home")
})
export const fishes = ((req: Request, res: Response) => {
    // res.render("Home")
})