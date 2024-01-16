
import { Request, Response } from "express";
import { createMenuObject } from "../helpers/createMenuObjects";
import { Pet } from "../models/pet";

export const home = ((req: Request, res: Response) => {

    let list = Pet.getAll()

    res.render("pages/page", {

        menu: createMenuObject('all'),
        banner: {
            title: "All the animals",
            background: "allanimals.jpg"
        },
        list
    })
    // res.render -> It's responsible to redenring the FILE VIEW
    // res.send("Page Home Controller")
})

export const dogs = ((req: Request, res: Response) => {

    let list = Pet.getFromType("dog")

    res.render("pages/page", {

        menu: createMenuObject('dogs'),
        banner: {
            title: "Dogs",
            background: "/banner_dog.jpg"
        },
        list
    })
    // res.send("Dogs Page")
})

export const cats = ((req: Request, res: Response) => {

    let list = Pet.getFromType("cat")

    res.render("pages/page", {

        menu: createMenuObject('cats'),
        banner: {
            title: "Cats",
            background: "banner_cat.jpg"
        },
        list
    })
    // res.send("Cats Page")
})

export const fishes = ((req: Request, res: Response) => {

    let list = Pet.getFromType("fish")

    res.render("pages/page", {

        menu: createMenuObject('fishes'),
        banner: {
            title: "Fishes",
            background: "banner_fish.jpg"
        },
        list
    })
    // res.send("Fishes Page")
})