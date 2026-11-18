import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './globals.css'
import App from './pages/Login/page.tsx'
import { ThemeProvider } from './contexts/ThemeContext.tsx'
import { FavoritesProvider } from './contexts/FavoritesContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <FavoritesProvider>
        <App />
      </FavoritesProvider>
    </ThemeProvider>
  </StrictMode>,
)
