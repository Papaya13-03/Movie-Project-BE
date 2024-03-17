import axios from "axios";
const axiosCall = async (url, method) => {
  const opts = {
    url,
    method,
    headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`,
    }
  };
  var response = {};
  await axios(opts)
    .then((res) => {
      response = res.data;
    })
    .catch((err) => {
      response = err;
    });
  return response;
};

const getTrending = async (type, time_window, page) => {
  const url = `https://api.themoviedb.org/3/trending/${type}/${time_window}?page=${page}`;
  return await axiosCall(url, "GET");
};

const nowPlaying = async (page, language = "en-US") => {
  const url = `https://api.themoviedb.org/3/movie/now_playing?language=${language}&page=${page}`;
  return await axiosCall(url, "GET");
};

const mostPopular = async (page, language = "en-US") => {
  const url = `https://api.themoviedb.org/3/movie/popular?language=${language}&page=${page}`;
  return await axiosCall(url, "GET");
};

const topRated = async (page, language = "en-US") => {
  const url = `https://api.themoviedb.org/3/movie/top_rated?language=${language}&page=${page}`;
  return await axiosCall(url, "GET");
};

const upcoming = async (page, language = "en-US") => {
  const url = `https://api.themoviedb.org/3/movie/upcoming?language=${language}&page=${page}`;
  return await axiosCall(url, "GET");
};

const movieDetails = async (movie_id) => {
    const url = `https://api.themoviedb.org/3/movie/${movie_id}`;
    return await axiosCall(url, "GET");
}

const credits = async (movie_id) => {
  const url = `https://api.themoviedb.org/3/movie/${movie_id}/credits`
  return await axiosCall(url, "GET");
}

const trailer = async (movie_id) => {
    const url = `https://api.themoviedb.org/3/movie/${movie_id}/videos`
    return await axiosCall(url, "GET");
}

export { getTrending, nowPlaying, mostPopular, topRated, upcoming, movieDetails, credits, trailer };
