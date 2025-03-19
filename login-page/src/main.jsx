import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  // ! Após a criação de ambas as paginas (login e register), criar uma inicial, que direcionará para ou login ou register, usando router
  // ? avaliar mudança de cor do sistema
  // ? avaliar criação de modo claro e escuro 
  /* { 
    path: "/",
    element: "<App />"
  }, */
  {
    path: "/login",
    element: "<App />"
  },
  {
    path: "/register",
    element: "<App />"
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
