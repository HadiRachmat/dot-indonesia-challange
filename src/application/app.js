import express from 'express';
import { ResponseError } from '../error/response_error.js';
import { publicRouter } from "../route/public/index.js";

export const app = express();


app.use(publicRouter)

//response Error
app.use(ResponseError)