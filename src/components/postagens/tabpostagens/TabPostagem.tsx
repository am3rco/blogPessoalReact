import React, { useState } from "react";
import { AppBar, Tab, Tabs, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import { TabContext, TabPanel } from "@mui/lab";
import ListaPostagem from "../listapostagens/ListaPostagem";
import "./TabPostagem.css";

function TabPostagem() {
  // Define um estado interno chamado "value", inicializado com o valor "1".
  // A função "setValue" é responsável por atualizar o valor de "value".
  const [value, setValue] = useState("1");
  function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
    // Define uma função "handleChange" que será chamada quando o valor do componente for alterado.
    // Ela recebe dois parâmetros: um objeto do tipo React.ChangeEvent e uma string "newValue", que representa o novo valor do componente.
    setValue(newValue); // A função utiliza a função "setValue" para atualizar o estado interno "value" com o novo valor recebido.
  }
  return (
    <>
      <TabContext value={value}>
        <AppBar position="static">
          <Tabs centered indicatorColor="secondary" onChange={handleChange}>
            <Tab label="Todas as postagens" value="1" />
            <Tab label="Sobre-mim" value="2" />
          </Tabs>
        </AppBar>
        <TabPanel value="1">
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            <ListaPostagem />
          </Box>
        </TabPanel>
        <TabPanel value="2">
          <Typography
            variant="h5"
            gutterBottom
            color="textPrimary"
            component="h5"
            align="center"
            className="titulo"
          >
            Sobre Mim
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            color="textPrimary"
            align="justify"
          >
            Gosto de Gatos, de Jogos e da minha namorada Giovanna da Silva Otoni
            (por favor case comigo)
          </Typography>
        </TabPanel>
      </TabContext>
    </>
  );
}
export default TabPostagem;
