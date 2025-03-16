import { Link } from "react-router-dom";
import "../../Styles/Produto/Produto.scss";
import { ProdutosType } from "../../Types/Types";



const Produto = ({title, image, price, id} : ProdutosType) => {
    return (
        <div className="boxProduto">
            <h2>{title}</h2>
            <img src={image} alt="" />
            <h4>${price}</h4>
            <button><Link to={`/produto/${id}`}>Ver Produto</Link></button>
        </div>
    )
}

export default Produto;