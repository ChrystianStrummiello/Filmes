import axios from "axios";

const movieUrl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const getMovieDetails = (movieId) => {
  const endpoint = `${movieUrl}${movieId}?${apiKey}&language=pt-BR`;
  return new Promise((resolve, reject) => {
    axios
      .get(endpoint)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
};

export default getMovieDetails;
