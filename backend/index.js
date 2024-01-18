import express from "express";
import {PORT,mongoDURL} from "./config.js";
import mongoose from "mongoose";
import {Book} from "./models/bookModel.js";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";
const app = express();
app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
    console.log(req);
    return res.status(234).send("Welcome");
});

app.use("/books", booksRoute);



mongoose
     .connect(mongoDURL)
        .then(() => {
            console.log("Connected to MongoDB")
            app.listen(PORT, () => {
                console.log(`Server listening on port ${PORT}`);
              });
        })
        .catch((err) => console.log(err));