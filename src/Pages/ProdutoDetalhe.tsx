import { useParams } from "react-router-dom";
import "../Styles/Pages/ProdutoDetalhe.scss";
import { useEffect, useState } from "react";
import { ProdutosType } from "../Types/Types";



const ProdutoDetalhe = () => {



    const {id} = useParams();

    const[produto, setProduto] = useState<ProdutosType | null>(null);

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
                    <h1 className="animeLeft">Conheça mais sobre o produto: <strong>{produto.title}!</strong></h1> 
                    <div className="boxDetalheProduto__content">
                        <img className="animeLeft" src={produto.image} alt="" />
                        <div className="boxDetalheProduto__content__txt animeLeft">
                            <h6>{produto.category}</h6>
                            <h2>{produto.title}</h2>
                            <p>{produto.description}</p>
                            <h4>Preço: ${produto.price}</h4>
                            <button className="addCar" onClick={handleAdicionarAoCarrinho}>Adicionar ao carrinho</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProdutoDetalhe;