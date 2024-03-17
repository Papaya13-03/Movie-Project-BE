import responseHandler from "../handlers/response.handler.js";
import User from "../models/user.model.js";
import jsonwebtoken from "jsonwebtoken"

const signup = async (req, res) => {
  const { username, password, nickname } = req.body;
  const data = await User.findOne({ username });
  if (data) {
    return responseHandler.badRequest(res, "Username existed!");
  }
  const user = new User();
  user.username = username;
  user.nickname = nickname;
  user.setPassword(password);
  await user.save();

  const token = jsonwebtoken.sign({id:user._id}, process.env.JWT_SECRET_KEY);
  return responseHandler.created(res, {
    token: token,
    msg: "Created!",
    expiresIn: 604800,
  });
};

const signin = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });

  if (!user)
    return responseHandler.badRequest(res, { msg: "Username doesn't exist!" });
  if (!user.validPassword(password))
    return responseHandler.badRequest(res, { msg: "Wrong password!" });

  const token = jsonwebtoken.sign({id: user._id}, process.env.JWT_SECRET_KEY);
  return responseHandler.ok(res, {
    token: token,
    msg: "ok",
    expiresIn: 604800,
  });
};

const changePassword = async (req, res) => {
  const { token, password, newPassword } = req.body;
  const id = jsonwebtoken.verify(token, process.env.JWT_SECRET_KEY);
  const data = await User.findOne({ _id: token, password });
  if (!data) return responseHandler.badRequest(res, { msg: "Wrong password!" });
  data.setPassword(newPassword);
  await data.save();
  return responseHandler.ok(res, { msg: "Password changed!" });
};


export {signin, signup, changePassword};