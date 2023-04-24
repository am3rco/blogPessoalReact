import React, { ChangeEvent, useState, useEffect } from "react";

import "./Login.css";
import { Grid, Typography, TextField, Button } from "@material-ui/core";
import { Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import { api } from "../../services/Service";
import UserLogin from "../../models/UserLogins";

function Login() {
  let navigate = useNavigate(); // Redireciona o usuário para uma determinada página

  // OuseLocalStorage() armazena e recupera um valor identificado pela chave 'token' no localStorage do navegador
  const [token, setToken] = useLocalStorage("token");

  // useState - Observa o estado da variável.
  const [userLogin, setUserLogin] = useState<UserLogin>(
    // Inicializa o estado local "userLogin" com um objeto da classe "UserLogin" contendo as propriedades "id", "usuario", "senha" e "token" com valores vazios
    // "setUserLogin" é uma função que permite atualizar o valor do estado "userLogin" e re-renderizar o componente para exibir as alterações
    {
      id: 0,
      usuario: "",
      senha: "",
      token: "",
    }
  );

  // A função updateModel com o parâmetro e: ChangeEvent<HTMLInputElement> é utilizada para lidar com eventos de mudança em elementos de formulário do tipo input e atualizar o modelo de dados da aplicação com base no valor atualizado.
  function updateModel(e: ChangeEvent<HTMLInputElement>) {
    setUserLogin({
      ...userLogin, // Está utiliza o operador spread para criar uma cópia do estado userLogin antes de atualizá-lo, afim de não perder nenhuma propriedade durante a att
      [e.target.name]: e.target.value,
      //[e.target.name]: nome da propriedade para identificar qual é o campo
      //e.target.value: pega o valor digitado no campo
    });
  }

  useEffect(
    () => {
      // useEffect - executa uma função sempre que uma variavel dofre uma alteração
      if (token != "") {
        navigate("/home"); // se o token for diferente de vazio, ira redirecionar para a home;
      }
    },
    [token] // sempre que o token for modificado, o useEffect é acionado
  );

  // Esta função é ativada quando o formulário é enviado e impede o comportamento padrão do navegador de enviar o formulário.
  // Em vez disso, exibe uma mensagem de log no console com informações do objeto userLogin.
  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const resposta = await api.post("usuarios/logar", userLogin);
      setToken(resposta.data.token);

      alert("Usuário logado com sucesso!");
    } catch (error) {
      alert("Dados do usuário inconsistentes. Erro ao logar!");
    }
  }

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid xs={6} alignItems="center">
        <Box paddingX={20}>
          <form onSubmit={onSubmit}>
            <Typography
              variant="h3"
              gutterBottom
              color="textPrimary"
              align="center"
              className="negrito"
            >
              Entrar
            </Typography>
            <TextField
              value={userLogin.usuario}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)}
              id="usuario"
              label="Nome do Usuario"
              variant="outlined"
              name="usuario"
              margin="normal"
              fullWidth
            ></TextField>
            <TextField
              value={userLogin.senha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)}
              id="senha"
              label="Digite sua Senha"
              variant="outlined"
              name="senha"
              margin="normal"
              fullWidth
              type="password"
            ></TextField>

            <Box marginTop={2} textAlign="center">
              <Button type="submit" variant="contained" className="botao">
                Logar
              </Button>
            </Box>
          </form>

          <Box display="flex" justifyContent="center" marginTop={2}>
            <Box marginRight={1}>
              <Typography variant="subtitle1" gutterBottom align="center">
                Não possui uma conta?
              </Typography>
            </Box>

            <Link to="/cadastrousuario" style={{ color: "black" }}>
              <Typography variant="subtitle1" gutterBottom className="cadastro">
                Cadastre-se
              </Typography>
            </Link>
          </Box>
        </Box>
      </Grid>

      <Grid xs={6} className="bg-image"></Grid>
    </Grid>
  );
}

export default Login;
