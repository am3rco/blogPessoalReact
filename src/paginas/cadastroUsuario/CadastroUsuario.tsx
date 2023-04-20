import React from "react";
import { Grid, Typography, Button, TextField } from "@material-ui/core";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import "./CadastroUsuario.css";

function CadastroUsuario() {
  return (
    <Grid container className="grid">
      <Grid item xs={6} className="image2"></Grid>
      <Grid item xs={6} alignItems="center">
        <Box paddingX={20}>
          <form>
            <Typography
              className="titulo-cadastro"
              variant="h3"
              gutterBottom
              component="h3"
              align="center"
            >
              Cadastrar
            </Typography>
            <TextField
              id="nome"
              label="Nome"
              variant="outlined"
              name="nome"
              margin="normal"
              fullWidth
            />
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              name="email"
              margin="normal"
              fullWidth
            />
            <TextField
              id="senhaCadastro"
              label="Senha"
              variant="outlined"
              name="senha"
              margin="normal"
              type="password"
              fullWidth
            />
            <TextField
              id="confirmarSenha"
              label="Confirmar Senha"
              variant="outlined"
              name="confirmarSenha"
              margin="normal"
              type="password"
              fullWidth
            />
            <Box marginTop={2} textAlign="center" className="box-btn">
              <Link to="/login" className="text-decoration-none">
                <Button className="btn-cancelar" variant="contained">
                  Cancelar
                </Button>
              </Link>
              <Button
                className="btn-cadastrar"
                type="submit"
                variant="contained"
              >
                Cadastrar
              </Button>
            </Box>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
}
export default CadastroUsuario;
