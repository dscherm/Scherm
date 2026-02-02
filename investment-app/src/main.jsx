import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './styles/index.css'

// Use '/' for Netlify, '/investment-app' for local dev in monorepo
const basename = import.meta.env.PROD && !window.location.pathname.startsWith('/investment-app')
  ? '/'
  : '/investment-app'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
