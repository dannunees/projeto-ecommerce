import { Link } from "react-router-dom";
import "../../Styles/Header/Header.scss";

const Header = () => {
    return (
        <header>
            <div className="container">
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/produtos">Produtos</Link></li>
                        <li><Link to="/contato">Contato</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;