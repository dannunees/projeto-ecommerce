import Banner from "../Components/Banner/Banner";
import "../Styles/Pages/Homepage.scss";

const Homepage = () => {
    return (
        <>
            <Banner />
            <div className="container">
                <div className="homepage__intro">
                    <h1>Bem-vindo ao Projeto E-commerce!</h1>
                    <p>Apesar de ser apenas um projeto, aqui você encontrará produtos de qualidade, preços incríveis e entrega rápida para você</p>
                </div>

            </div>
        </>
    )
}

export default Homepage;