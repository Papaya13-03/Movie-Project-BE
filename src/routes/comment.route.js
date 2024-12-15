import {
  addComment,
  getAllComments,
} from "../controllers/comment.controller.js";
import express from "express";

const commentsRouter = express.Router();

commentsRouter.post("/:movieId/add", addComment);
commentsRouter.get("/:movieId", getAllComments);

export default commentsRouter;
