import { Link } from "react-router-dom";
import "../../Styles/Header/Header.scss";
import { SignedIn, SignedOut, SignOutButton, useUser } from "@clerk/clerk-react";

const Header = () => {
    
    const {user} = useUser();
     
    console.log(user);

    return (
        <header>

            <SignedIn>
                <div className="headerTop">
                    <div className="container">
                        <div className="headerTop__content">
                            <p>Bem vindo, {user?.firstName} !</p>
                            <Link to="/carrinho"><img src="/carrinho-de-compras.png" alt="" /></Link>
                        </div>
                    </div>
                </div>
            </SignedIn>     

            <div className="container">
                <img src="/logo.png" alt="" />
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/produtos">Produtos</Link></li>
                        <li><Link to="/contato">Contato</Link></li>
                        <SignedOut>
                            <li><Link to="/login">Login</Link></li>
                        </SignedOut>
                        <SignedIn>
                            <SignOutButton />
                        </SignedIn>                        
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;