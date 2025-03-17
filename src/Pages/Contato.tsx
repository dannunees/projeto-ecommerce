import { useState } from "react";
import "../Styles/Pages/Contato.scss";

const Contato = () => {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [mensagem, setMensagem] = useState("");
    const [active, setActive] = useState(false);

    console.log('Active', active);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        console.log("Formulário enviado!");
        console.log("Nome:", nome);
        console.log("E-mail:", email);
        console.log("Mensagem:", mensagem);


        setActive(true)
        setNome("");
        setEmail("");
        setMensagem("");
        
        setTimeout(() => {
            setActive(false)
        }, 2000);
    };

    return (
        <div className="container pageContato animeLeft">
            <h1>Contato</h1>
            <div className="pageContato__boxes">

                <img src="/contato.jpg" alt="" />
                <form onSubmit={handleSubmit}>

                    {active &&
                        <div className="form-send">
                            <p>Mensagem enviada!</p>
                        </div>
                    }
                    <div className="form-group">
                        <label htmlFor="nome">Nome:</label>
                        <input
                            type="text"
                            id="nome"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">E-mail:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="mensagem">Mensagem:</label>
                        <textarea
                            id="mensagem"
                            value={mensagem}
                            onChange={(e) => setMensagem(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit">Enviar</button>
                </form>
            </div>
        </div>
    );
};

export default Contato;
