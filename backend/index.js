import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import booksRoute from './routes/bookRoutes.js';
import cors from "cors";

const app = express();

//middleware for Parsing Request Body
app.use(express.json());

//Middleware for handling CORS POLICY
//Option 1: Allow ALL Origins with default of Cors(*)
app.use(cors());
//Option 2: Allow Custom Origins
// app.use(cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type']
// }))

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