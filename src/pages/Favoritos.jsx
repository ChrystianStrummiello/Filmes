import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import MovieCard from "../Components/MovieCard";
import { useLocalStorage } from "react-use";

const Favoritos = () => {
  const [favoritos, setFavoritos, removeFavorito] = useLocalStorage(
    "favoritos",
    []
  );

  console.log("favoritos: ", favoritos);

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        padding: "5rem 0rem 5rem 0rem",
      }}
    >
      <Typography
        variant="h1"
        sx={{ fontSize: "3rem", fontWeight: "bold", textAlign: "center" }}
      >
        Favoritos
      </Typography>
      <Grid
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
          padding: "2rem 0",
          margin: "0 auto",
          maxWidth: "1200px",
          width: "100%",
          boxSizing: "border-box",
          overflowY: "auto",
          height: "67vh", // Adjust height as needed
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
        {favoritos.map((movie) => (
          <Grid item xs={12} sm={6} md={4} key={movie.id}>
            <MovieCard key={movie.id} movie={movie} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Favoritos;
