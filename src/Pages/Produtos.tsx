import { useEffect, useState } from "react";
import "../Styles/Pages/Produtos.scss";
import Produto from "../Components/Produto/Produto";
import { ProdutosType } from "../Types/Types";

const Produtos = () => {

    const[produtos, setProdutos] = useState<ProdutosType[]>([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then((dados: ProdutosType[]) => {
            console.log('produtos', dados),
            setProdutos(dados);
        })
    },[])


    return (
        <>  
            <div className="container pageProdutos">
                <h1>Encontre os mais variados tipos de produtos!</h1>
                
                <div className="contentProdutos">
                    {produtos.map((item) => (
                        <Produto key={item.id} id={item.id} title={item.title} image={item.image} price={item.price} description={item.description} category={item.category} />
                    ))}
                </div>

            </div>
        </>
    )
}

export default Produtos;