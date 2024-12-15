import responseWithData from "../handlers/response.handler.js";
import User from "../models/user.model.js";
import jwt from "jsonwebtoken";

const decodeToken = (req) => {
  try {
    const bearerToken = req.headers.authorization;
    console.log(JSON.stringify(req.headers));
    if (!bearerToken) return false;

    const token = bearerToken.split(" ")[1];
    if (!token) return false;

    return { token };
  } catch {
    return false;
  }
};
const auth = async (req, res, next) => {
  try {
    const tokenDecoded = decodeToken(req);
    if (!tokenDecoded) return responseWithData.unauthorized(res);

    const token = tokenDecoded.token;

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    console.log(decoded);

    const { id } = decoded;
    if (!id) return responseWithData.unauthorized(res);

    const user = await User.findById(id);
    if (!user) return responseWithData.unauthorized(res);

    req.user = user;
    next();
  } catch (error) {
    console.error("Authentication error:", error);
    return responseWithData.unauthorized(res);
  }
};

export default auth;
