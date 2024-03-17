import { signup, signin, changePassword } from "../controllers/user.controller.js";
import express from "express";

const userRouter = express.Router();

userRouter.post("/signup", signup);
userRouter.post("/signin", signin);
userRouter.put("/change-password", changePassword);

export default userRouter;