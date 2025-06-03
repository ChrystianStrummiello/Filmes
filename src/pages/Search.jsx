import { Box, Grid, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import getMovieSearch from "../APIs/getMovieSearch";
import MovieCard from "../Components/MovieCard";

const Search = () => {
  const [search, setSearch] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    (async function getMoviesSearch() {
      const movies = await getMovieSearch(searchText);
      setSearch(movies);
    })();
  }, [searchText]);

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        padding: "5rem 0rem 5rem 0rem",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h1" sx={{ fontSize: "3rem", fontWeight: "bold" }}>
        Pesquisar
      </Typography>
      <TextField
        onChange={(e) => handleChange(e)}
        placeholder="Pesquisar por um nome..."
        variant="outlined"
        fullWidth
        sx={{
          padding: "0.5rem",
          width: "100%",
          maxWidth: "50rem",

          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "white",
              color: "white",
            },
            "&:hover fieldset": {
              borderColor: "white",
              color: "white",
            },
            "&.Mui-focused fieldset": {
              borderColor: "white",
              color: "white",
            },
          },
          "& .MuiInputLabel-root": {
            color: "white",
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "white",
          },
          "& .MuiInputBase-input": {
            color: "white",
          },
          "& .MuiInputBase-input.Mui-focused": {
            color: "white",
          },
        }}
      />

      <Grid
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
          padding: "2rem 0",
          // margin: "0 auto",
          maxWidth: "1200px",
          width: "100%",
          boxSizing: "border-box",
          overflowY: "auto",
          height: "60vh", // Adjust height as needed
          "&::-webkit-scrollbar": {
            width: "8px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#888",
            borderRadius: "4px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#555",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "#f1f1f1",
          },
          "&::-webkit-scrollbar-corner": {
            backgroundColor: "transparent",
          },
          "&::-webkit-scrollbar-button": {
            display: "none",
          },
          "&::-webkit-scrollbar-track-piece": {
            backgroundColor: "transparent",
          },
          "&::-webkit-scrollbar-thumb:horizontal": {
            backgroundColor: "#888",
            borderRadius: "4px",
          },
          "&::-webkit-scrollbar-thumb:vertical": {
            backgroundColor: "#888",
            borderRadius: "4px",
          },
          "&::-webkit-scrollbar-button:horizontal": {
            display: "none",
          },
          "&::-webkit-scrollbar-button:vertical": {
            display: "none",
          },
          "&::-webkit-scrollbar-track:horizontal": {
            backgroundColor: "transparent",
          },
          "&::-webkit-scrollbar-track:vertical": {
            backgroundColor: "transparent",
          },
          "&::-webkit-scrollbar-corner:horizontal": {
            backgroundColor: "transparent",
          },
          "&::-webkit-scrollbar-corner:vertical": {
            backgroundColor: "transparent",
          },
        }}
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {search.map((movie) => (
          <Grid item xs={12} sm={6} md={4} key={movie.id}>
            <MovieCard search={true} key={movie.id} movie={movie} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Search;
