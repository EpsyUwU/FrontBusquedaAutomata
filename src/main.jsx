import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from './App.jsx'
import RegisterForm from './Register.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter>
        <Routes>
            <Route path="/" element={<RegisterForm/>} />
            <Route path="/app" element={<App/>} />
        {/* Asegúrate de agregar aquí cualquier otra ruta que necesites */}
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
