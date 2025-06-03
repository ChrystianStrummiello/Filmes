import { Box, IconButton, Link, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getMovieDetails from "../APIs/getMovieDetails";
import { FaStar } from "react-icons/fa6";
import { MdBookmarkAdd, MdBookmarkAdded } from "react-icons/md";
import getMovieVideos from "../APIs/getMovieVideos";
import { IoIosArrowBack } from "react-icons/io";
import { HiOutlineExternalLink } from "react-icons/hi";
import { useLocalStorage } from "react-use";
import { FcLike } from "react-icons/fc";
import { PiHeartLight } from "react-icons/pi";

const movieImg = import.meta.env.VITE_IMG;

const Movie = () => {
  const [movie, setMovie] = useState([]);
  const [videos, setVideos] = useState([]);
  const [loaging, setLoading] = useState(true);
  const [liked, setLiked] = useState(false);
  const [favoritos, setFavoritos, removeFavorito] = useLocalStorage("favoritos", []);
  const { id } = useParams();
  const date = new Date(movie.release_date);
  const year = date.getFullYear();
  const month = date.getMonth();

  const runtime = () => {
    const hours = Math.floor(movie?.runtime / 60);
    const minutes = movie?.runtime % 60;
    return `${hours}h ${minutes}min`;
  };

  const getMonth = () => {
    const months = [
      "Janeiro",
      "Fevereiro",
      "Março",
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
    // biome-ignore lint/style/useTemplate: <explanation>
    return months[month] + " de " + year;
  };

  const getStars = () => {
    const stars = [];
    for (let i = 0; i < Math.floor(movie.vote_average / 2); i++) {
      stars.push(<FaStar color="yellow" key={i} />);
    }
    return stars;
  };

  const revenue = () => {
    return movie.revenue.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  useEffect(() => {
    setTimeout(() => {
      (async function getMovie() {
        const movie = await getMovieDetails(id);
        const videos = await getMovieVideos(id);
        setVideos(videos);
        setLoading(false);
        setMovie(movie);
      })();
    }, 2000);
  });

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
    <>
      <Box
        sx={{
          padding: "5rem 5rem 2rem 0rem",
          textAlign: "end",
          position: "relative",
          backgroundColor: "#0000007e",
          zIndex: 0,
        }}
      >
        <IconButton
          sx={{
            padding: "1rem",
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "white",
          }}
          onClick={() => {
            window.history.back();
          }}
        >
          <IoIosArrowBack color="white" /> {"Voltar"}
        </IconButton>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
          position: "relative",
          zIndex: 0,
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          padding: "0rem 0rem 10rem 0rem",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <Box sx={{ width: "auto", padding: "1rem" }}>
          <img
            src={`${movieImg}${movie?.poster_path}`}
            alt={movie?.title}
            style={{
              width: "auto",
              height: "auto",
              objectFit: "cover",
              borderRadius: "15px",
              boxShadow: "5px 5px 15px 5px rgb(0, 0, 0) inset",
              margin: "auto",
            }}
          />
        </Box>

        <Box sx={{ width: "50%", padding: "1rem" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h1"
              sx={{
                padding: "2rem",
                textAlign: "start",
                fontSize: "3rem",
                fontWeight: "bold",
              }}
            >
              {movie?.title}
            </Typography>
            <IconButton
              onClick={() => {
                setLiked(!liked);
                if (liked) {
                  setFavoritos(favoritos.filter((f) => f.id !== movie.id));
                } else {
                  setFavoritos([...favoritos, movie]);
                }
              }}
            >
              {liked || favoritos.some((f) => f.id === movie.id) ? (
                
                // <MdBookmarkAdded color="white" size="2rem" />
                <FcLike color="white" size="2rem" />
                
              ) : (
                // <MdBookmarkAdd color="gray" size="2rem" />
                <PiHeartLight color="gray" size="2rem" />
              )}
            </IconButton>
          </Box>
          <Typography
            variant="subtitle1"
            sx={{
              padding: "1rem",
              textAlign: "start",
              fontSize: "1.5rem",
            }}
          >
            {movie?.overview}
          </Typography>

          <Typography
            variant="subtitle1"
            sx={{
              padding: "1rem",
              textAlign: "start",
              fontSize: "1.5rem",
            }}
          >
            Faturamento: {revenue()}
          </Typography>

          <Typography
            variant="subtitle1"
            sx={{
              padding: "1rem",
              textAlign: "start",
              fontSize: "1.5rem",
            }}
          >
            Lancamento: {getMonth()}
          </Typography>

          <Typography
            variant="subtitle1"
            sx={{
              padding: "1rem",
              textAlign: "start",
              fontSize: "1.5rem",
            }}
          >
            Duração: {runtime()}
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "start",
              alignItems: "center",
              flexWrap: "wrap",
              padding: "1rem",
              gap: "0.5rem",
            }}
          >
            {movie?.genres.map((genre) => (
              <Typography
                key={genre.id}
                variant="subtitle1"
                sx={{
                  fontSize: "1.5rem",
                }}
              >
                {`${genre.name} ${movie?.genres.length > 1 ? "|" : ""}`}
              </Typography>
            ))}
          </Box>

          <Typography
            variant="subtitle1"
            sx={{
              padding: "1rem",
              textAlign: "start",
              fontSize: "1.5rem",
              gap: "0.5rem",
            }}
          >
            {getStars()}
          </Typography>
          {movie?.homepage.length > 0 && (
            <Link
              href={movie?.homepage}
              target="_blank"
              rel="noopener noreferrer"
              underline="none"
              color="white"
              title="Ir para o site"
              variant="subtitle1"
              sx={{
                padding: "1rem",
                textAlign: "start",
                fontSize: "1.5rem",
                gap: "0.5rem",
                textDecoration: "none",
                color: "white",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              <HiOutlineExternalLink color="white" size="2.5rem" />
            </Link>
          )}
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "5rem",
          position: "relative",
          zIndex: 0,
          padding: "5rem",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        {movie?.production_companies.length > 0 &&
          movie?.production_companies[0].logo_path && (
            <>
              {movie?.production_companies.map((item) => {
                return (
                  <img
                    key={item.id}
                    src={`${movieImg}${item.logo_path}`}
                    alt={movie?.title}
                    style={{
                      width: "15%",
                      height: "auto",
                      objectFit: "cover",
                    }}
                  />
                );
              })}
            </>
          )}
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          position: "relative",
          zIndex: 0,
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          padding: "5rem 0 9rem 0",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        {videos.results.length > 0 && videos.results[0].key && (
          <Typography
            variant="h1"
            sx={{
              padding: "1rem",
              textAlign: "start",
              fontSize: "3rem",
              fontWeight: "bold",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "1rem",
              flexDirection: "column",
            }}
          >
            Trailer
            <iframe
              style={{
                border: "none",
                borderRadius: "10px",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
              }}
              key={videos.results[0].key}
              width="800"
              height="400"
              src={`https://www.youtube.com/embed/${videos.results[0].key}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </Typography>
        )}
      </Box>
    </>
  );
};

export default Movie;
