import responseHandler from "../handlers/response.handler.js";
import * as tmdb from "../axios/tmdb.axios.js";

const getTrending = async (req, res) => {
  const { type, time_window } = req.params;
  var { page } = req.query;
  if (!page) page = 1;
  await tmdb
    .getTrending(type, time_window, page)
    .then((response) => responseHandler.ok(res, response))
    .catch((error) => responseHandler.error(res));
};

const nowPlaying = async (req, res) => {
  var { page, language } = req.query;
  if (!page) page = 1;
  if (!language) language = "en-US";
  await tmdb
    .nowPlaying(page, language)
    .then((response) => responseHandler.ok(res, response))
    .catch((error) => responseHandler.error(res));
};

const popular = async (req, res) => {
  var { page, language } = req.query;
  if (!page) page = 1;
  if (!language) language = "en-US";
  await tmdb
    .mostPopular(page, language)
    .then((response) => responseHandler.ok(res, response))
    .catch((error) => responseHandler.error(res));
};

const topRated = async (req, res) => {
  var { page, language } = req.query;
  if (!page) page = 1;
  if (!language) language = "en-US";
  await tmdb
    .topRated(page, language)
    .then((response) => responseHandler.ok(res, response))
    .catch((error) => responseHandler.error(res));
};

const upcoming = async (req, res) => {
  var { page, language } = req.query;
  if (!page) page = 1;
  if (!language) language = "en-US";
  await tmdb
    .upcoming(page, language)
    .then((response) => responseHandler.ok(res, response))
    .catch((error) => responseHandler.error(res));
};

const movieDetails = async (req, res) => {
  const { movie_id } = req.params;
  if (!movie_id) return responseHandler.badRequest(res, "Missing movie id!");
  await tmdb
    .movieDetails(movie_id)
    .then((response) => responseHandler.ok(res, response))
    .catch((error) => responseHandler.error(res));
};

const credits = async (req, res) => {
  const { movie_id } = req.params;
  if (!movie_id) return responseHandler.badRequest(res, "Missing movie id!");
  await tmdb
    .credits(movie_id)
    .then((response) => responseHandler.ok(res, response))
    .catch((error) => responseHandler.error(res));
}

const trailer = async (req, res) => {
    const { movie_id } = req.params;
    if (!movie_id) return responseHandler.badRequest(res, "Missing movie id!");
    await tmdb
      .trailer(movie_id)
      .then((response) => responseHandler.ok(res, response))
      .catch((error) => responseHandler.error(res));
}

export { getTrending, nowPlaying, popular, topRated, upcoming, movieDetails, credits, trailer };
