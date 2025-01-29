import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import axios from 'axios';

//for vitae use import.meta.env for create react app use process.env
axios.defaults.baseURL = import.meta.env.REACT_APP_API_BASE_URL || 'http://localhost:3000';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <h1>React Crud App</h1>
    <a href="http://localhost:5173/">Home</a> | 
    <a href="http://localhost:5173/admin">Admin</a> 
    <App />
  </StrictMode>,
)
