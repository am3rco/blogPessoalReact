import React, { useState, useEffect, ChangeEvent } from "react";
import { Grid, Typography, Button, TextField } from "@material-ui/core";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import User from "../../models/User";
import { cadastroUsuario } from "../../services/Service";
import "./CadastroUsuario.css";
import { toast } from "react-toastify";

function CadastroUsuario() {
  let history = useNavigate();
  const [confirmarSenha, setConfirmarSenha] = useState<String>(""); //verifica se o valor do campo senha é igual ao valor do campo confirmar senha
  const [user, setUser] = useState<User>({
    //contém as informações que serão enviadas para cadastro
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
  });

  const [userResult, setUserResult] = useState<User>({
    //3º state - armazena os valores do retorno da API
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
  });

  useEffect(() => {
    //é acionado após o envio das informações
    if (userResult.id != 0) {
      //se o id for diferente de 0, a função redireciona para a tela de login, pois entende que foi concluido um cadastro com informações reais e não mais as informações padrões
      history("/login");
    }
  }, [userResult]);

  function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
    setConfirmarSenha(e.target.value); //armazena o valor digitado no campo confirmarSenha
  }

  function updatedModel(e: ChangeEvent<HTMLInputElement>) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }
  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault(); //previne o comportamento padrão do botão para não atualizar a tela
    if (confirmarSenha == user.senha) {
      //compara os campos confirmarSenha e senha
      await cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult);
      toast.success("Usucario cadastrado com sucesso", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "colored",
      });
    } else {
      toast.error(
        "Dados inválidos. Favor verificar as informações de cadastro.",
        {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          theme: "colored",
        }
      );
    }
  }

  return (
    <Grid container className="grid">
      <Grid item xs={6} className="image2"></Grid>
      <Grid item xs={6} alignItems="center">
        <Box paddingX={20}>
          <form onSubmit={onSubmit}>
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
              value={user.nome}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              id="nome"
              label="Nome"
              variant="outlined"
              name="nome"
              margin="normal"
              fullWidth
            />
            <TextField
              value={user.usuario}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              id="usuario"
              label="Email"
              variant="outlined"
              name="usuario"
              margin="normal"
              fullWidth
            />
            <TextField
              value={user.senha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              id="senhaCadastro"
              label="Senha"
              variant="outlined"
              name="senha"
              margin="normal"
              type="password"
              fullWidth
            />
            <TextField
              value={confirmarSenha}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                confirmarSenhaHandle(e)
              }
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
