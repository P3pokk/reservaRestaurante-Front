import { Link, Route, BrowserRouter, Routes } from "react-router-dom";
import LoginPage from "./pages/Login";
import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";


const Rotas = () => {
   return(
       <BrowserRouter>
            <Route path="/" component = { Home } />
            <Route path="/cadastro" component = { Cadastro } />
            <Route path="/login" component = { LoginPage } />
       </BrowserRouter>
   )
}

export default Rotas;
