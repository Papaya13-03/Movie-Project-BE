import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import apiRouter from "../src/routes/api.route.js";
import userRouter from "../src/routes/user.route.js";
import commentsRouter from "../src/routes/comment.route.js";
import auth from "../src/middlewares/auth.middleware.js";
import favourtieRouter from "../src/routes/favourite.js";
import * as event from "events";

dotenv.config();
const app = express();
console.log(process.env.PORT);
const port = process.env.PORT | 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
event.EventEmitter.prototype._maxListeners = 100;

app.use(cors());
app.options("*", (req, res) => {
  res.status(200).json("OK");
});

app.use("/user", userRouter);
app.use("/api", apiRouter);
app.use("/comments", auth, commentsRouter);
app.use("/favourite", auth, favourtieRouter);

app.get("/", (req, res) => {
  res.json("Welcome to server nottttttt!");
});

mongoose
  .connect(process.env.MONGO_DB_URL)
  .then(() => {
    console.log("Database connected!");
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log({ err });
  });

export default app;
