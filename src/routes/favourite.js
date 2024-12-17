import express from "express";
import {
  addFavourite,
  getAllFavourite,
  getFavourite,
} from "../controllers/favourite.controller.js";

const favourtieRouter = express.Router();

favourtieRouter.get("/all", getAllFavourite);
favourtieRouter.post("/:movieId", addFavourite);
favourtieRouter.get("/:movieId", getFavourite);

export default favourtieRouter;
