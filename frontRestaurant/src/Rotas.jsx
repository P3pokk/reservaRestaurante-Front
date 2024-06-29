import { Link, Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Cadastro from "./pages/Cadastro.jsx";
import Login from "./pages/Login.jsx";

const Rotas = () => {
   return(
       <BrowserRouter>
            <Route path="/" component = { Home } />
            <Route path="/cadastro" component = { Cadastro } />
            <Route path="/cadastro" component = { Login } />
       </BrowserRouter>
   )
}

export default Rotas;
