import express from 'express';


const publicRouter = new express.Router();

publicRouter.get("/login", (req, res) => res.json({data:"OK"}))

export {
    publicRouter
}