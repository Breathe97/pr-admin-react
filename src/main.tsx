import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterView } from './routes/index'
import './styles/index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterView />
  </StrictMode>
)
