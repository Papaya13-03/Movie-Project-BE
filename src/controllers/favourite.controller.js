import responseHandler from "../handlers/response.handler.js";
import Favourite from "../models/favourite.model.js";

const addFavourite = async (req, res) => {
  const body = req.body;
  const userId = req.user._id;
  const { movieId } = req.params;

  const isLiked = await Favourite.find({ movieId, userId });
  if (isLiked.length > 0) {
    await Favourite.deleteOne(isLiked._id);
  } else {
    const favourite = new Favourite();
    favourite.userId = userId;
    favourite.movieId = movieId;
    await favourite.save();
  }

  return responseHandler.created(res, body);
};

const getFavourite = async (req, res) => {
  const { movieId } = req.params;
  const userId = req.user._id;
  const favourite = await Favourite.find({ movieId, userId });
  return responseHandler.ok(res, favourite.length > 0);
};

export { addFavourite, getFavourite };
