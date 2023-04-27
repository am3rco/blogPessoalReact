import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";

import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { addToken } from "../../../store/tokens/action";

function Navbar() {
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  let navigate = useNavigate();
  const dispatch = useDispatch();

  function goLogout() {
    dispatch(addToken(""));
    alert("Usuário deslogado");
    navigate("/login");
  }

  var navbarComponent;

  if (token != "") {
    <AppBar className="static bg-color">
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
            <Link to="/formularioPostagem" className="text-decorator-none">
              <Typography variant="h6" className="color-itens">
                Cadastrar Postagens
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
    </AppBar>;
  }

  return (
    <>
      {navbarComponent}
    </>
  );
}

export default Navbar;
