import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import getMoviesRated from "../APIs/getMoviesRated";
import MovieCard from "../Components/MovieCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import TheatersIcon from "@mui/icons-material/Theaters";
import getMovieDetails from "../APIs/getMovieDetails";

const imgUrl = import.meta.env.VITE_IMG;

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [moviesDetails, setMoviesDetails] = useState([]);
  const [loaging, setLoading] = useState(true);

  const genresMap = {
    28: "Ação",
    12: "Aventura",
    16: "Animação",
    14: "Fantasia",
    878: "Ficção científica",
    35: "Comédia",
    18: "Drama",
    27: "Terror",
    10751: "Familia",
    9648: "Misterio",
    10749: "Romance",
    53: "Thriller",
    10752: "Guerra",
    37: "Faroeste",
    10770: "TV",
    99: "Documentário",
    10402: "Musica",
  };

  const getMonth = (dateString) => {
    if (!dateString) return "Data desconhecida";

    const date = new Date(dateString);
    const meses = [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ];

    const mes = meses[date.getMonth()];
    const ano = date.getFullYear();

    return `${mes} de ${ano}`;
  };

  const getMovieGenres = (movie) => {
    if (!movie || !movie.genre_ids) return "Gêneros desconhecidos";

    const genres = movie.genre_ids
      .map((id) => genresMap[id])
      .filter((genre) => genre);

    console.log("Genres: ", movie.genre_ids);

    return genres.length > 0 ? genres.join(", ") : "Gêneros desconhecidos";
  };

  useEffect(() => {
    setTimeout(() => {
      (async function getMovies() {
        const movies = await getMoviesRated();
        setMovies(movies);
        setLoading(false);

        movies.map(async (movie) => {
          const movieDetail = await getMovieDetails(movie.id);
          // const dataImg =
          //   movieDetail.production_companies.length === 1
          //     ? movieDetail.production_companies[0].logo_path
          //     : movieDetail.production_companies[1].logo_path;
          setMoviesDetails((prev) => [movieDetail]);
        });

        const data = moviesDetails.map((movie) => {
          console.log("Movie Details: ", movie.genres[0].name);
        });
      })();
    }, 2000);
  }, []);

  if (loaging) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: "25rem 0rem 5rem 0rem",
          textAlign: "center",
        }}
      >
        <div class="loader">
          {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 66 66"
            height="100px"
            width="100px"
            class="spinner"
          >
            <circle
              stroke="url(#gradient)"
              r="20"
              cy="33"
              cx="33"
              stroke-width="1"
              fill="transparent"
              class="path"
            />
            <linearGradient id="gradient">
              <stop stop-opacity="1" stop-color="#fe0000" offset="0%" />
              <stop stop-opacity="0" stop-color="#af3dff" offset="100%" />
            </linearGradient>
          </svg>
        </div>
      </Box>
    );
  }
  return (
    <div>
      <Swiper
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        breakpoints={{
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 2,
          },
          1440: {
            slidesPerView: 3,
          },
          1920: {
            slidesPerView: 4,
          },
        }}
      >
        {movies.map((movie) => (
          <SwiperSlide virtual Index={movie.id} key={movie.id}>
            <Link
              to={`/movie/${movie.id}`}
              style={{
                textDecoration: "none",
              }}
            >
              <img
                src={`${imgUrl}${movie.poster_path}`}
                alt={movie.title}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      <Box bgcolor="#121212" color="white" minHeight="100vh">
        <Container sx={{ mt: 6 }}>
          <Typography variant="h5" gutterBottom>
            Trailer em destaque
          </Typography>
          <Card sx={{ display: "flex", bgcolor: "#1f1f1f" }}>
            <CardMedia
              component="img"
              sx={{ width: 300 }}
              image={`${imgUrl}${movies[0].backdrop_path}`}
              alt="Trailer"
            />
            <CardContent>
              <Typography color="white" variant="h6">
                {movies[0].title}
              </Typography>
              <Typography variant="body2" color="gray">
                {movies[0].overview}
              </Typography>
              <Link
                to={`/movie/${movies[0].id}`}
                style={{
                  textDecoration: "none",
                  color: "white",
                  marginTop: "1rem",
                  display: "block",
                  width: "fit-content",
                  padding: "0.5rem 1rem",
                  border: "1px solid white",
                  borderRadius: "4px",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "",
                    color: "black",
                  },
                }}
              >
                Assistir Trailer
              </Link>
            </CardContent>
          </Card>
        </Container>

        <Container sx={{ mt: 6 }}>
          <Typography variant="h5" gutterBottom>
            Gêneros
          </Typography>
          {/* <Box display="flex" gap={1} flexWrap="wrap">
            {Object.entries(genresMap).map((genre) => (
              <Chip
                label={genre[1]}
                clickable
                key={genre}
                color="primary"
                onClick={() => {
                  console.log("ON CLICK: ", genre[1]);
                }}
              />
            ))}
          </Box> */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 2,
              mt: 2,
            }}
          >
            {Object.entries(genresMap).map(([id, genre]) => (
              <Button
                variant="contained"
                color="primary"
                key={id}
                onClick={() => {
                  console.log("Gênero selecionado: ", genre);
                  getMovieGenres(moviesDetails[id]);
                }}
              >
                {genre}
              </Button>
            ))}
          </Box>
        </Container>

        <Container sx={{ mt: 6 }}>
          <Typography variant="h5" gutterBottom>
            Filmes Populares
          </Typography>
          <Grid
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            container
            rowSpacing={3}
          >
            {movies.map((movie) => (
              <Grid item xs={12} sm={6} md={4} key={movie.id}>
                <MovieCard key={movie.id} getMonth={getMonth} movie={movie} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default Home;
