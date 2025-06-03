import { Avatar, Box, Chip, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Perfil = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: "1rem",
        padding: "5rem 15rem 5rem 15rem",
        justifyContent: "start",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        maxWidth: "1200px",
        margin: "0 auto",
        minHeight: "100vh",
        flexWrap: "wrap",
        textAlign: "left",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Avatar sx={{ width: 150, height: 150 }} src="/src/assets/perfil.jpeg" />

      <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <Typography variant="h2" sx={{ fontSize: "2rem", fontWeight: "bold" }}>
          Chrystian Strummiello
        </Typography>
        <Typography
          variant="h2"
          sx={{ fontSize: "1.5rem", fontWeight: "normal" }}
        >
          Desenvolvedor Frontend
        </Typography>
        <Typography variant="body1" sx={{ fontSize: "1rem" }}>
          Olá, sou Chrystian Strummiello, um desenvolvedor frontend apaixonado
          por criar interfaces incríveis e funcionais. Com experiência em React,
          JavaScript e design responsivo, estou sempre em busca de novos
          desafios e oportunidades para aprimorar minhas habilidades.
        </Typography>
        <Typography variant="body1" sx={{ fontSize: "1rem" }}>
          Estou sempre aberto a colaborações e projetos interessantes. Se você
          está procurando alguém para ajudar a transformar suas ideias em
          realidade, não hesite em entrar em contato!
        </Typography>

        <Typography variant="body1" sx={{ fontSize: "1rem" }}>
          <strong>Contato:</strong> 11 9 7330-8332
        </Typography>
        <Typography variant="body1" sx={{ fontSize: "1rem" }}>
          <strong>Email:</strong> chrystian.strummiello@gmail.com
        </Typography>
        <div style={{ display: "flex", gap: "1rem" }}>
          <Typography variant="body1" sx={{ fontSize: "1rem" }}>
            <Link
              sx={{ textDecoration: "none" }}
              target="_blank"
              to="https://www.linkedin.com/in/chrystian-s-/"
            >
              <Chip label="Linkedin" variant="outlined" color="primary" />
            </Link>
          </Typography>
          <Typography variant="body1" sx={{ fontSize: "1rem" }}>
            <Link
              sx={{ textDecoration: "none" }}
              target="_blank"
              to="https://github.com/ChrystianStrummiello"
            >
              <Chip label="GitHub" variant="outlined" color="primary" />
            </Link>
          </Typography>
          <Typography variant="body1" sx={{ fontSize: "1rem" }}>
            <Chip label="Portfólio" variant="outlined" color="primary" /> ( em
            breve )
          </Typography>
        </div>
        <Typography variant="body1" sx={{ fontSize: "1rem" }}>
          <strong>Localização:</strong> São Paulo, Brasil
        </Typography>

        <Typography variant="body1" sx={{ fontSize: "1rem" }}>
          <strong>Hobbies:</strong> Programação, Skate, Surf e Filmes.
        </Typography>
        <Typography variant="body1" sx={{ fontSize: "1rem" }}>
          Estou animado para conectar e colaborar com outros profissionais da
          área. Vamos criar algo incrível juntos!
        </Typography>
      </Box>
    </Box>
  );
};

export default Perfil;
