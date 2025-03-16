import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../Styles/Banner/Banner.scss";

const Banner = () => {

    const settings = {
        dots: true,         // Mostra os indicadores (bolinhas)
        infinite: true,     // Loop infinito
        speed: 500,        // Velocidade da transição
        slidesToShow: 1,    // Quantos slides aparecem ao mesmo tempo
        slidesToScroll: 1,  // Quantos slides avançam por vez
        autoplay: true,     // Auto-play ativado
        autoplaySpeed: 2000 // Tempo entre as transições (2s)
    };

    return (
        <Slider className="banner" {...settings}>
            <div>
                <div className="bgBanner" style={{ backgroundImage: `url('/banner.jpg')` }}></div>
            </div>
            <div>
                <div className="bgBanner" style={{ backgroundImage: `url('/banner2.jpg')` }}></div>
            </div>
        </Slider>
    )
}

export default Banner;