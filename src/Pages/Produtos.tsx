import { useEffect, useState } from "react";
import "../Styles/Pages/Produtos.scss";
import Produto from "../Components/Produto/Produto";

const Produtos = () => {

    interface Produto {
        id: number
        title: string,
        price: number,
        description: string,
        category: string,
        image: string,
    }

    const[produtos, setProdutos] = useState<Produto[]>([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then((dados: Produto[]) => {
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
                        <Produto titulo={item.title} imagem={item.image} valor={item.price} />
                    ))}
                </div>

            </div>
        </>
    )
}

export default Produtos;