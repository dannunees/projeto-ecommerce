import { useEffect, useState } from "react";
import "../Styles/Pages/Produtos.scss";
import Produto from "../Components/Produto/Produto";
import { ProdutosType } from "../Types/Types";

const Produtos = () => {

    const[produtos, setProdutos] = useState<ProdutosType[]>([]);
    const[busca, setBusca] = useState<string>("");
    const[categoria, setCategoria] = useState<string>("");

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then((dados: ProdutosType[]) => {
            console.log('produtos', dados),
            setProdutos(dados);
        })
    },[])


    const buscarProdutos = () => {
        return produtos.filter((produto) => {

            const buscaFiltro = produto.title.toLowerCase().includes(busca.toLowerCase());
            
            const categoriaFiltro = categoria ? produto.category.toLowerCase().includes(categoria.toLowerCase()) : true;
            
            return buscaFiltro && categoriaFiltro;
        });
    };

    const produtosFiltrados = buscarProdutos();

    return (
        <>  
            <div className="container pageProdutos animeLeft">
                <h1>Encontre os mais variados tipos de produtos!</h1>
                
                <div className="filters">
                    <input 
                        type="text" 
                        placeholder="Buscar produtos..." 
                        value={busca}
                        onChange={(e) => setBusca(e.target.value)}
                    />

                    <select onChange={(e) => setCategoria(e.target.value)}>
                        <option value="">Selecione uma categoria</option>
                        {[...new Set(produtos.map((item) => item.category))].map((categoria, index) => (
                            <option key={index} value={categoria}>{categoria}</option>
                        ))}
                    </select>

                </div>
                
                <div className="contentProdutos">
                    {produtosFiltrados.length > 0 ? (
                        produtosFiltrados.map((item) => (
                            <Produto 
                                key={item.id} 
                                id={item.id} 
                                title={item.title} 
                                image={item.image} 
                                price={item.price} 
                                description={item.description} 
                                category={item.category} 
                            />
                        ))
                    ) : (
                        <p>Nenhum produto encontrado!</p>
                    )}
                </div>

            </div>
        </>
    )
}

export default Produtos;