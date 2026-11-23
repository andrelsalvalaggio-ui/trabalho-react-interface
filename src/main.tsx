import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './globals.css'
import App from './pages/Login/page.tsx'
import { ThemeProvider } from './contexts/ThemeContext.tsx'
import { CartProvider } from './contexts/CartContext.tsx'
import { initializeProducts } from './data/products.ts'

initializeProducts()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ThemeProvider>
  </StrictMode>,
)
