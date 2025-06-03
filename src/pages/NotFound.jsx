import { Container, Typography } from "@mui/material";
import React from "react";

const NotFound = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "15rem 0rem 5rem 0rem",
      }}
    >
      <Typography
        variant="h1"
        sx={{ fontSize: "3rem", fontWeight: "bold", textAlign: "center" }}
      >
        404
      </Typography>
      <Typography
        variant="h1"
        sx={{ fontSize: "3rem", fontWeight: "bold", textAlign: "center" }}
      >
        Página não encontrada
      </Typography>
    </Container>
  );
};

export default NotFound;
