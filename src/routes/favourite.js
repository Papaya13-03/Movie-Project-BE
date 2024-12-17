import express from "express";
import {
  addFavourite,
  getFavourite,
} from "../controllers/favourite.controller.js";

const favourtieRouter = express.Router();

favourtieRouter.post("/:movieId", addFavourite);
favourtieRouter.get("/:movieId", getFavourite);

export default favourtieRouter;
