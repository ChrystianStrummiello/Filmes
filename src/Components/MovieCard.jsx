import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { FaStar } from "react-icons/fa6";
import { MdBookmarkAdd, MdBookmarkAdded } from "react-icons/md";
import { Link } from "react-router-dom";
const MovieCard = ({ search, movie }) => {
  const [liked, setLiked] = useState(false);
  const [favoritos, setFavoritos] = useState([]);
  const date = new Date(movie?.release_date);
  const year = date.getFullYear();
  const month = date.getMonth();

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
    return months[month] + " de " + year;
  };

  const getStars = () => {
    const stars = [];
    for (let i = 0; i < Math.floor(movie?.vote_average / 2); i++) {
      stars.push(<FaStar color="yellow" key={i} />);
    }
    return stars;
  };

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        // alignItems: "center",
        // padding: 2,
        // margin: 2,
        position: "relative",
        overflow: "hidden",
        border: "1px solid #333",
        borderRadius: 2,
        boxShadow: 3,
        background: "linear-gradient(to right, #2d2d2d, #171717)",
        color: "white",
        width: { xs: "50%", sm: "90%", md: "90%" },
        transition: "all 0.3s ease-in-out",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
    >
      <Link
        to={`/movie/${movie?.id}`}
        style={{ textDecoration: "none", color: "white" }}
      >
        <CardMedia
          component="img"
          image={
            search
              ? `https://image.tmdb.org/t/p/w500${movie?.poster_path}`
              : `https://image.tmdb.org/t/p/w500${movie?.backdrop_path}`
          }
          alt={movie?.title}
          sx={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
          }}
          loading="lazy"
        />
      </Link>

      {!search && (
        <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Typography variant="h6">{movie?.title}</Typography>
          <Typography variant="body2">{getMonth()}</Typography>

          <Typography
            variant="body2"
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              fontSize: "0.875rem",
              lineHeight: "1.5rem",
            }}
          >
            {movie?.overview}
          </Typography>

          <Typography sx={{ display: "flex", gap: 1 }}>{getStars()}</Typography>

          <Typography variant="caption">{movie?.vote_count} votos</Typography>

          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button sx={{ color: "white", textTransform: "none" }}>
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to={`/movie/${movie?.id}`}
              >
                saiba mais
              </Link>
            </Button>
          </Box>
        </CardContent>
      )}
    </Card>
  );
};

export default MovieCard;
