
// Importações necessárias
import React, { useState } from 'react';
// importar o css dps
import './App.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você poderia adicionar a lógica de autenticação
    console.log(`Email: ${email}, Senha: ${password}`);
    // Após a autenticação, você poderia redirecionar para outra página
    // Por exemplo, window.location.href = '/home';
  };

  return (
    <div className="login-page">
      <h2> <img src="https://th.bing.com/th/id/OIG3.I5w8nfQMb7vzxAZuigyT?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn" alt="Logo" /></h2>
      <form onSubmit={handleSubmit}>
        <div className="buttons">
          <label htmlFor="email"></label>
          <input 
            placeholder= ' Email'
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="Buttons">
          <label htmlFor="password"></label>
          <input className='input'
            placeholder= ' Senha'
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button className="button-entrar">Entrar</button>
      </form>
    </div>
  );
};

export default LoginPage;


