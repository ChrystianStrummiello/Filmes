import axios from "axios";

const movieUrlTopRated = import.meta.env.VITE_API_TOP_RATED;
const apiKey = import.meta.env.VITE_API_KEY;

const getMoviesRated = () => {
  const endpoint = `${movieUrlTopRated}${apiKey}&language=pt-BR`;
  return new Promise((resolve, reject) => {
    axios
      .get(endpoint)
      .then((response) => {
        resolve(response.data.results);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export default getMoviesRated;
