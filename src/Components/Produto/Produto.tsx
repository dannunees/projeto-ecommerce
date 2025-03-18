import { Link } from "react-router-dom";
import "../../Styles/Produto/Produto.scss";
import { ProdutosType } from "../../Types/Types";
import { SignedIn} from "@clerk/clerk-react";




const Produto = ({title, image, price, id, category} : ProdutosType) => {


    const handleAdicionarAoCarrinho = () => {

        const carrinho = JSON.parse(localStorage.getItem("carrinho") || "[]");

        if (!carrinho.includes(id)) {
            carrinho.push(id);
            localStorage.setItem("carrinho", JSON.stringify(carrinho));
            alert("Produto adicionado ao carrinho!");
        } else {
            alert("Produto já está no carrinho!");
        }
    };

    return (
        <div className="boxProduto animeLeft">
            <h6>{category}</h6>
            <h2>{title}</h2>
            <img src={image} alt="" />
            <h4>${price}</h4>
            <button><Link to={`/produto/${id}`}>Ver Produto</Link></button>

            <SignedIn>
                <button className="addCar" onClick={handleAdicionarAoCarrinho}>Adicionar ao carrinho</button>
            </SignedIn>

        </div>
    )
}

export default Produto;