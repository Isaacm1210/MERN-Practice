import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import booksRoute from './routes/bookRoutes.js';

const app = express();

//middleware for Parsing Request Body
app.use(express.json());

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('Welcom to Mern Stack Tutorial');
});

//Routes
app.use('/books', booksRoute);

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('App Connected to DataBase');
        app.listen(PORT, () => {
            console.log(`App is Listening on port ${PORT}`)
        });
    }
    ).catch((error) => {
        console.log(error);
    });