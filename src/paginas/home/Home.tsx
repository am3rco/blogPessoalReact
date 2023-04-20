import React from "react";

import "./Home.css";
import { Button, Grid, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
function Home() {
  return (
    <>
      <Grid container className="gridcontainer grid-align bg-home">
        <Grid className="grid-align" item xs={6}>
          <Box paddingX={20}>
            <Typography
              variant="h3"
              gutterBottom
              component="h3"
              className="title-text"
            >
              Seja bem vindo(a)!
            </Typography>
            <Typography
              variant="h5"
              gutterBottom
              component="h5"
              className="title-text"
            >
              Expresse aqui os seus pensamentos e opiniões!
            </Typography>
          </Box>
          <Box className="boxbottom-flex">
            <Box marginRight={1}></Box>
            <Button variant="outlined" className="botao">
              Ver Postagens
            </Button>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <img
            src="https://th.bing.com/th/id/OIP.-OCrhECpZwY6zZJtInM_WgHaKX?pid=ImgDet&rs=1"
            alt=""
            className="catimage-sized"
          />
        </Grid>
        <Grid xs={12} className="postagens"></Grid>
      </Grid>
    </>
  );
}

export default Home;
