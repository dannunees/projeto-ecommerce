import { useParams } from "react-router-dom";
import "../Styles/Pages/ProdutoDetalhe.scss";
import { useEffect, useState } from "react";
import { ProdutosType } from "../Types/Types";



const ProdutoDetalhe = () => {

    const {id} = useParams();

    const[produto, setProduto] = useState<ProdutosType | null>(null);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then((response) => response.json())
        .then((data : ProdutosType) => {
            setProduto(data);
            console.log(data)
        })
    },[id])

    if(!produto) return <p>Carregando...</p>

    return (
        <>
            <div className="boxDetalheProduto">
                <div className="container">
                    <h1>Conheça mais sobre o produto: <strong>{produto.title}!</strong></h1> 
                    <div className="boxDetalheProduto__content">
                        <img src={produto.image} alt="" />
                        <div className="boxDetalheProduto__content__txt">
                            <h2>{produto.title}</h2>
                            <p>{produto.description}</p>
                            <h4>Preço: ${produto.price}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProdutoDetalhe;