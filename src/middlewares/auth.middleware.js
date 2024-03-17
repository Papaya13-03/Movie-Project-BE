import responseWithData from "../handlers/response.handler.js";
import User from "../models/user.model.js";

const decodeToken = (req) => {
  try {
    const bearerToken = req.header.Authorization;
    if (!bearerToken) return false;

    const token = bearerToken.split(" ")[1];
    if (!token) return false;

    return { token };
  } catch {
    return false;
  }
};

const auth = async (req, res, next) => {
  const tokenDecoded = decodeToken(req);
  if (!tokenDecoded) return responseWithData.unauthorized(res);
  const token = tokenDecoded.token;
  const _id = jwt.verify(token, process.env.JWT_SERCRET_KEY);
  const user = User.findById(_id);
  if (!user) return responseWithData.unauthorized(res);

  req.user = user;
  next();
};

export default auth;