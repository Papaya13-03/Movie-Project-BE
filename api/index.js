import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import apiRouter from "../src/routes/api.route.js";
import userRouter from "../src/routes/user.route.js";

dotenv.config();
const app = express();
const port = process.env.PORT | 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  cors({
    origin: "https://movie-project-fe.vercel.app/",
    methods: ["GET", "POST", "PUT", "CREATE"],
  })
);

app.use("/auth", userRouter);
app.use("/api", apiRouter);

app.get("/", (req, res) => {
  res.json("Welcome to server!");
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
