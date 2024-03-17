import mongoose from "mongoose";
import jsonwebtoken  from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  nickname: {
    type: String,
    required: true,
  },
  salt: {
    type: String,
    require: true,
  },
});

userSchema.methods.setPassword = function (password) {
  this.salt = uuidv4();
  this.password = jsonwebtoken.sign(password, this.salt);
};

userSchema.methods.validPassword = function (password) {
  const encodePassword = jsonwebtoken.sign(password, this.salt);
  return encodePassword === this.password;
};

const User = mongoose.model("User", userSchema);

export default User;
