import { useEffect, useState } from "react";
import Banner from "../Components/Banner/Banner";
import "../Styles/Pages/Homepage.scss";
import { ProdutosType } from "../Types/Types";
import Produto from "../Components/Produto/Produto";
import { Link } from "react-router-dom";
import Galeria from "../Components/Galeria/Galeria";


const Homepage = () => {

    const[produtos, setProdutos] = useState<ProdutosType[]>([])

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => {
            setProdutos(data);
        })
    }, [])

    const produtosHome = produtos.slice(0, 3);
    
    return (
        <>
            <Banner />
            <div className="container animeLeft">
                <div className="homepage__intro">
                    <h1>Bem-vindo ao Projeto E-commerce!</h1>
                    <p>Apesar de ser apenas um projeto, aqui você encontrará produtos de qualidade, preços incríveis e entrega rápida para você</p>
                </div>
                <div className="homepage__itens">
                    {produtosHome.map((item) => (
                        <Produto 
                            key={item.id} 
                            id={item.id} 
                            title={item.title} 
                            image={item.image} 
                            price={item.price} 
                            description={item.description} 
                            category={item.category} 
                        />
                    ))}
                </div>
                <div className="homepage__button">
                    <button><Link to="/produtos">Ver todos os produtos</Link></button>
                </div>

                <div className="homepage__destaques">
                    <h1>Galeria de Produtos</h1>
                    <Galeria />
                    <button><Link to="/produtos">Ver todos os produtos</Link></button>
                </div>
            </div>
        </>
    )
}

export default Homepage;