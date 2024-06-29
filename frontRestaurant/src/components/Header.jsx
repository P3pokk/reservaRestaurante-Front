import { Link } from "react-router-dom";
import Rotas from "../Rotas";
function Header() {
    return (
        <>
        <header>
            <div className='logos'>
                <img className="logo" src="https://th.bing.co m/th/id/OIG3.I5w8nfQMb7vzxAZuigyT?w=1024&h=1024&rs=1&pid=ImgDetMain" alt="" />
                <p className='logoName' >Jacaré's Lanches</p>
            </div>
            <div className="menuHeader">
                <ul>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/login"}>Login</Link></li>
                    <li><Link to={"/cadastro"}>Cadastro</Link></li>
                </ul>
            </div>
        </header>
        </>
    );
}
export default Header