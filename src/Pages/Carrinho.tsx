import { useEffect, useState } from "react";
import { ProdutosType } from "../Types/Types";
import "../Styles/Pages/Carrinho.scss";

const CarrinhoPage = () => {
    const [carrinho, setCarrinho] = useState<number[]>([]);
    const [produtosCarrinho, setProdutosCarrinho] = useState<ProdutosType[]>([]);


    useEffect(() => {
        const carrinhoCompras = JSON.parse(localStorage.getItem("carrinho") || "[]");
        setCarrinho(carrinhoCompras);
    }, []);

    useEffect(() => {
        if (carrinho.length === 0) return; 


        const fetchProdutosCarrinho = async () => {
            const produtos = await Promise.all(
                carrinho.map(async (id) => {
                    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
                    const produto = await response.json();
                    return produto;
                })
            );
            setProdutosCarrinho(produtos);
        };

        fetchProdutosCarrinho();
    }, [carrinho]);

    return (
        <div className="pageCarrinho container">
            <h2>Produtos no Carrinho</h2>
            {produtosCarrinho.length > 0 ? (
                produtosCarrinho.map((produto) => (
                    <div className="boxCarrinho" key={produto.id}>
                        <h3>{produto.title}</h3>
                        <img src={produto.image} alt={produto.title} />
                        <p>${produto.price}</p>
                    </div>
                ))
            ) : (
                <p>Não há produtos no carrinho.</p>
            )}
        </div>
    );
};

export default CarrinhoPage;
