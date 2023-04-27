import React from "react";

import { Grid, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";

import "./Footer.css";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";

function Footer() {
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  var footerComponent;

  if (token != "") {
    footerComponent = (
      <Grid container className="container-centerow, gridcontainer-center">
        <Grid alignItems="center" item xs={12}>
          <Box className="box1">
            <Box paddingTop={3} className="box gridcontainer-center">
              <Typography
                variant="h5"
                gutterBottom
                className="box_text-align box_text-white"
              >
                Contate-me pelas redes sociais!
              </Typography>
            </Box>
            <Box className="rodape">
              <a href="https://github.com/am3rco" target="_blank">
                <GitHubIcon className="icons" />
              </a>
              <a href="https://www.instagram.com/am3rco" target="_blank">
                <InstagramIcon className="icons" />
              </a>

              <a href="https://mail.google.com" target="_blank">
                <EmailIcon className="icons" />
              </a>
              <a
                href="https://www.linkedin.com/school/generationbrasil/"
                target="_blank"
              >
                <LinkedInIcon className="icons" />
              </a>
            </Box>
          </Box>
          <Box className="box2">
            <Box paddingTop={1}>
              <Typography
                variant="subtitle2"
                gutterBottom
                className="box_text-align"
              >
                © 2023 Copyright:
              </Typography>
            </Box>
            <Box>
              <a target="_blank" href="https://github.com/am3rco">
                <Typography
                  variant="subtitle2"
                  gutterBottom
                  className="box_text-align box_text-black"
                >
                  Marco Antônio
                </Typography>
              </a>
            </Box>
          </Box>
        </Grid>
      </Grid>
    );
  }

  return <>{footerComponent}</>;
}

export default Footer;
