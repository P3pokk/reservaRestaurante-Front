// Importações necessárias
import React, { useState } from 'react';
import './Login.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(`Email: ${email}, Senha: ${password}`);

    // Aqui você poderia adicionar a lógica de autenticação
    // Por exemplo, uma chamada a uma API de autenticação
    try {
      const response = await fetch('/api/authenticate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      if (response.ok) {
        // Autenticação bem-sucedida, redirecionar para a página inicial
        window.location.href = '/home';
      } else {
        // Tratar falhas de autenticação
        console.error('Falha na autenticação');
        alert('Email ou senha incorretos. Tente novamente.');
      }
    } catch (error) {
      console.error('Erro ao autenticar:', error);
      alert('Ocorreu um erro. Tente novamente mais tarde.');
    }
  };

  return (
    <div className="login-page">
      <h2>
        <img src="https://th.bing.com/th/id/OIG3.I5w8nfQMb7vzxAZuigyT?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn" alt="Logo" />
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="Buttons">
          <label htmlFor="email"></label>
          <input 
            placeholder="Email"
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="Buttons">
          <label htmlFor="password"></label>
          <input
            placeholder="Senha"
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit" className="button-entrar">Entrar</button>
        <button type="button" className="button-cadastrarse" onClick={() => window.location.href = '/register'}>
          Criar nova conta
        </button>
      </form>
    </div>
  );
};

export default LoginPage;