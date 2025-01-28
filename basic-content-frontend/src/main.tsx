import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import axios from 'axios';

//for vitae use import.meta.env for create react app use process.env
axios.defaults.baseURL = import.meta.env.REACT_APP_API_BASE_URL || 'http://localhost:3000/api';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
