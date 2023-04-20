import { BrowserRouter, Route, Routes } from "react-router-dom";

import React from "react";
import Home from "./paginas/home/Home";
import Login from "./paginas/login/Login";
import Navbar from "./components/estaticos/navbar/Navbar";
import Footer from "./components/estaticos/footer/Footer";
import "./App.css";
import CadastroUsuario from "./paginas/cadastroUsuario/CadastroUsuario";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div style={{ minHeight: "100vh" }}>
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route
              path="/cadastrousuario"
              element={<CadastroUsuario />}
            ></Route>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
