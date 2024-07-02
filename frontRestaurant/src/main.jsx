import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Rotas from './Rotas.jsx'
import LoginPage from './pages/Login.jsx'
import Cadastro from './pages/Cadastro.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <LoginPage /> */}
    {/* <Cadastro /> */}
  </React.StrictMode>,
)
