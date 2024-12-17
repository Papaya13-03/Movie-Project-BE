import mongoose from "mongoose";

const favouriteSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  movieId: {
    type: String,
    required: true,
  },
});

const Favourite = mongoose.model("Favourite", favouriteSchema);

export default Favourite;
