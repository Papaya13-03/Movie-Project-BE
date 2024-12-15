import responseHandler from "../handlers/response.handler.js";
import Comment from "../models/comment.model.js";

const addComment = async (req, res) => {
  const body = req.body;
  const { movieId } = req.params;

  const comment = new Comment();
  comment.name = body.name;
  comment.text = body.text;
  comment.timestamp = body.timestamp;
  comment.movieId = movieId;

  await comment.save();

  return responseHandler.created(res, body);
};

const getAllComments = async (req, res) => {
  const { movieId } = req.params;
  const comments = await Comment.find({ movieId });
  return responseHandler.ok(res, comments);
};

export { addComment, getAllComments };
