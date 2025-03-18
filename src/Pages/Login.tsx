import { useState } from "react";
import "../Styles/Pages/Login.scss";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {

    const[user, setUser] = useState("");
    const[password, setPassword] = useState("");
    const navigate = useNavigate();
    

    const fakeUser = {
        user: localStorage.getItem('user'),
        password: localStorage.getItem('password')
    }

    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault();


        localStorage.setItem('user', user);
        localStorage.setItem('password', password);

        if(fakeUser.user === user && fakeUser.password === password ) {

            localStorage.setItem('auth', 'true');
            navigate("/");
            location.reload();
        } else {
            alert('usuário ou senha inválidos');
            localStorage.removeItem('user');
            localStorage.removeItem('password');            
        }
    }

    return (
        <div className="pageLogin">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label htmlFor="user">Usuário</label>
                    <input placeholder="Digite seu usário" type="text" name="user" id="user" value={user} onChange={(e) => setUser(e.target.value)}/>
                </fieldset>
                <fieldset>
                    <label htmlFor="password">Senha</label>
                    <input placeholder="Digite sua senha" type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </fieldset>
                <button type="submit">Entrar</button>
                <p>Ainda não tem sua conta? <Link to="/cadastro">Clique aqui</Link> para criar seu usuário!</p>
            </form>
        </div>
    )
}

export default Login;