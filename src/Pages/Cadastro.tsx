import { useState } from "react";
import "../Styles/Pages/Cadastro.scss";
import { useNavigate } from "react-router-dom";

const Cadastro = () => {

    const[name, setName] = useState("");
    const[user, setUser] = useState("");
    const[password, setPassword] = useState("");
    const[create, setCreate] = useState(false);

    const navigate = useNavigate();

    const createUser = (e:React.FormEvent) => {
        e.preventDefault();

        localStorage.setItem("nome", name);
        localStorage.setItem("user", user);
        localStorage.setItem("password", password);

        localStorage.removeItem('carrinho');


        setCreate(true);

        setTimeout(() => {
            navigate('/login');
        }, 1000);
    }

    return (
        <div className="pageCadastro">
            <form onSubmit={createUser} className={create ? 'formActive' : ''}>

                <div className="sucessMsg">
                    <p>Usuário criado com sucesso!</p>
                </div>

                <fieldset>
                    <label htmlFor="name">Nome</label>
                    <input type="text" name="name" placeholder="Digite seu nome" value={name} onChange={(e) => setName(e.target.value)} />
                </fieldset>
                <fieldset>
                    <label htmlFor="user">Usuário</label>
                    <input type="text" name="user" placeholder="Digite seu usuário" value={user} onChange={(e) => setUser(e.target.value)}  />
                </fieldset>
                <fieldset>
                    <label htmlFor="password">Senha</label>
                    <input type="password" name="password" placeholder="Digite sua senha" value={password} onChange={(e) => setPassword(e.target.value)} />
                </fieldset>
                <button type="submit">Criar usuário</button>
            </form>
        </div>
    )
}

export default Cadastro;