import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  timestamp: {
    type: Date,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  movieId: {
    type: String,
    required: true,
  },
});

const Comment = mongoose.model("Comment", commentSchema);

export default Comment;
