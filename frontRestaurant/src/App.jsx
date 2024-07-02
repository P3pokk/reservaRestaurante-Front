import './App.css'
import { Link } from "react-router-dom";
import Rotas from "./Rotas";
function App() {
    return (
        <>
          <header>
              <div className='logos'>
                <img className='logo' src="https://th.bing.com/th/id/OIG3.I5w8nfQMb7vzxAZuigyT?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn" alt="Logo" />
                <p className='logoName' >Jacaré's Lanches</p>
              </div>
              <div className="menuHeader">
                  <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/login">Login</a></li>
                    <li><a href="/cadastro">Cadastro</a></li>
                  </ul>
              </div>
          </header>

          <section className='background'>
          </section>
        </>
    );
}
export default App