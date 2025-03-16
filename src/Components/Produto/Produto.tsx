import "../../Styles/Produto/Produto.scss";


interface dadosProduto {
    titulo: string,
    imagem: string,
    valor: number
}

const Produto = ({titulo, imagem, valor} : dadosProduto) => {
    return (
        <div className="boxProduto">
            <h2>{titulo}</h2>
            <img src={imagem} alt="" />
            <h4>${valor}</h4>
        </div>
    )
}

export default Produto;