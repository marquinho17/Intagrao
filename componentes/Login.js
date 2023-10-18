import React, { useState } from 'react';

const Login = () => {

    const [nomeUsuario, setNomeUsuario] = useState('');
    const [senhaUsuario, setSenhaUsuario] = useState('');
    const [erroMensagem, setErroMensagem] = useState('');

    function manipulaLogin() {
        // verifica se o nome de usuário e a senha são válidos
        if (nomeUsuario === 'marquinho' && senhaUsuario === 'marcos5715') {
            // redireciona para a página inicial após o login bem-sucedido
            window.location.href = '/paginadelogin';
        } else {
            setErroMensagem('Nome de usuário ou senha incorreta.');
        }
    };

    return(
        <div className="login-container">
            <h2>Instagrão</h2>
            <input type="text" placeholder="Nome de usuário"
            value={nomeUsuario}
            onChange={(m) => setNomeUsuario(m.target.value)}
            required />
            <input type="password" placeholder="Senha"
            value={senhaUsuario}
            onChange={(m) => setSenhaUsuario(m.target.value)}
            required />
            <button onClick={manipulaLogin}>Entrar</button>
            <p style={{ color:"red"}}>{erroMensagem}</p>

        </div>
    );
};

export default Login;