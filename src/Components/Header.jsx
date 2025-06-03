import { Avatar, Box, IconButton, Menu, MenuItem } from "@mui/material";
import { CiBookmark } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PiFilmSlateFill } from "react-icons/pi";
import { RxPerson } from "react-icons/rx";
import { FcLike } from "react-icons/fc";
import { useLocalStorage } from "react-use";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [favoritos] = useLocalStorage("favoritos");
  const [lengthFavoritos, setLengthFavoritos] = useState(0);

  const open = Boolean(anchorEl);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // useEffect(() => { 
  //     setLengthFavoritos(favoritos.length);
  // }, [favoritos]);
  
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignContent: "center",
          padding: "1rem 5rem 1rem 5rem",
          opacity: "100%",
        }}
      > 
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            cursor: "pointer",
          }}
        >
          <Link 
            style={{
              display: "flex",
              gap: "1rem",
              textDecoration: "none",
              color: "white",
            }} 
            to="/">
          <PiFilmSlateFill
            title="Logo"
            size={40}
            color="white"
            sx={{ 
              display: "flex", 
              justifyContent: "center", 
              alignItems: "center", 
              ":hover": { backgroundColor: "transparent" }
              }} />
          </Link>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Link
            style={{
              display: "flex",
              gap: "1rem",
              textDecoration: "none",
              color: "white",
            }}
            to="search"
          >
            <IconButton
              sx={{
                width: "4rem",
                ":hover": { backgroundColor: "transparent" },
              }}
              onClick={() => {}}
            >
              <CiSearch size={25} color="white" title="Pesquisar" />
            </IconButton>
          </Link>
          <Link
            style={{
              display: "flex",
              gap: "1rem",
              textDecoration: "none",
              color: "white",
            }}
            to="favoritos"
          >
            <IconButton
              sx={{
                ":hover": { backgroundColor: "transparent" },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={() => {}}
            >
              <FcLike title="favoritos" color="white" size={25} />

            </IconButton>
          </Link>
          <IconButton
            sx={{ width: "4rem", ":hover": { backgroundColor: "transparent" } }}
            color="inherit"
            onClick={handleClick}
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <RxPerson title="Perfil" size={25} color="white" />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem
              onClick={() => {
                handleClose();
              }}
            >
              <Link
                style={{
                  display: "flex",
                  gap: "1rem",
                  textDecoration: "none",
                  color: "black",
                }}
                to="Perfil"
              >
                Perfil
              </Link>
            </MenuItem>
          </Menu>
        </Box>
      </Box>
    </>
  );
};

export default Header;
