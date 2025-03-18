import { Link } from "react-router-dom";
import "../../Styles/Header/Header.scss";
import { useEffect, useState } from "react";

const Header = () => {
    
    const[login, setLogin] = useState<boolean>(false);

    const isLogin = () => {
        if( localStorage.getItem('auth') === "true") {
            setLogin(true);
            document.body.classList.add('logado');
        } else {
            setLogin(false);
            document.body.classList.remove('logado');
        }
    }

    const handleLogout = () => {
        localStorage.setItem('auth', 'false');
        isLogin();
    }

    useEffect(() => {
        isLogin();
    })
     
    return (
        <header>
            {login && 
            <div className="headerTop">
                <div className="container">
                    <div className="headerTop__content">
                        <p>Bem vindo, {localStorage.nome} !</p>
                        <Link to="/carrinho"><img src="/carrinho-de-compras.png" alt="" /></Link>
                    </div>
                </div>
            </div>
            }
            <div className="container">
                <img src="/logo.png" alt="" />
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/produtos">Produtos</Link></li>
                        <li><Link to="/contato">Contato</Link></li>
                        {login ? <li><Link to="/" onClick={handleLogout}>Logout</Link></li> : <li><Link to="/login">Login</Link></li> }
                        
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;