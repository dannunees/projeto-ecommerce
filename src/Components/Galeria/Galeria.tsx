import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import { ProdutosType } from "../../Types/Types";

const Galeria = () => {

    const[produtos, setProdutos] = useState<ProdutosType[]>([])

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => {
            setProdutos(data);
        })
    }, [])

    const settings = {
        dots: false,         // Mostra os indicadores (bolinhas)
        infinite: true,     // Loop infinito
        speed: 500,        // Velocidade da transição
        slidesToShow: 10,    // Quantos slides aparecem ao mesmo tempo
        slidesToScroll: 1,  // Quantos slides avançam por vez
        autoplay: true,     // Auto-play ativado
        autoplaySpeed: 1000, // Tempo entre as transições (2s)
        pauseOnHover: false,

        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,  
                    slidesToScroll: 1,
                    initialSlide: 0, 
                    dots: false,
                    arrows: false
                }
            }
        ]
    };


    return (
        <Slider className="slider" {...settings}>
            {produtos.map((item) => (
                <img key={item.id} src={item.image} alt="" />
            ))}
        </Slider>
    )
}

export default Galeria;