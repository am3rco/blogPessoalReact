import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";

import "./Navbar.css";

function Navbar() {
  const [token, setToken] = useLocalStorage("token");
  let navigate = useNavigate();

  function goLogout() {
    setToken("");
    alert("Usuário deslogado");
    navigate("/login");
  }

  return (
    <>
      <AppBar className="appbar-static bg-color">
        <Toolbar variant="dense" className="container">
          <Box className="itens">
            <Typography variant="h5" className="cursor">
              BlogPessoal
            </Typography>
          </Box>

          <Box className="box-flexcenter">
            <Link to="/home" className="text-decorator-none">
              <Box mx={1} className="itens">
                <Typography variant="h6" className="color-itens">
                  Home
                </Typography>
              </Box>
            </Link>
            <Box mx={1} className="itens">
              <Link to="/posts" className="text-decorator-none">
                <Typography variant="h6" className="color-itens">
                  Postagens
                </Typography>
              </Link>
            </Box>
            <Box mx={1} className="itens">
              <Link to="/temas" className="text-decorator-none">
                <Typography variant="h6" className="color-itens">
                  Temas
                </Typography>
              </Link>
            </Box>
            <Box mx={1} className="itens">
              <Link to="/formularioTema" className="text-decorator-none">
                <Typography variant="h6" className="color-itens">
                  Cadastrar Tema
                </Typography>
              </Link>
            </Box>
          </Box>

          <Box mx={1} className="itens itens_logout-color" onClick={goLogout}>
            <Typography variant="h6" className="color-itens">
              Logout
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
