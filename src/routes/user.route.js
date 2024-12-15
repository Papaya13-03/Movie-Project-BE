import {
  signup,
  signin,
  changePassword,
  getUser,
} from "../controllers/user.controller.js";
import express from "express";
import auth from "../middlewares/auth.middleware.js";

const userRouter = express.Router();

userRouter.post("/signup", signup);
userRouter.post("/signin", signin);
userRouter.put("/change-password", changePassword);
userRouter.get("/", auth, getUser);

export default userRouter;
