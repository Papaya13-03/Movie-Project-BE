import express from "express";
import {
  credits,
  getTrending,
  movieDetails,
  nowPlaying,
  popular,
  topRated,
  upcoming,
  trailer
} from "../controllers/tmdb.controller.js";

const apiRouter = express.Router();

apiRouter.get("/trending/:type/:time_window", getTrending);
apiRouter.get("/now-playing", nowPlaying);
apiRouter.get("/popular", popular);
apiRouter.get("/top-rated", topRated);
apiRouter.get("/upcoming", upcoming);
apiRouter.get("/movie-details/:movie_id", movieDetails);
apiRouter.get("/credits/:movie_id", credits);
apiRouter.get("/trailer/:movie_id", trailer);
apiRouter.get("/favourites/:movie_id", favorites);

export default apiRouter;
