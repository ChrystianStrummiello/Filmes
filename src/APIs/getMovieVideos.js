import axios from "axios";
const movieUrl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const getMovieVideos = (movieId) => {
  return new Promise((resolve, reject) => {
    const endpoint = `${movieUrl}${movieId}/videos?${apiKey}&language=pt-BR`;
    axios
      .get(endpoint)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export default getMovieVideos;
