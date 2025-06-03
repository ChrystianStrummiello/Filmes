import axios from "axios";

const movieSearch = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

const getMovieSearch = (search) => {
  return new Promise((resolve, reject) => {
    const endpoint = `${movieSearch}?query=${search}&${apiKey}&language=pt-BR`;
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

export default getMovieSearch;
