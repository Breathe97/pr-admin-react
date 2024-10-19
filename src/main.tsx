import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PrAdmin from './pr-admin/index'
import { routes } from './routes/index'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PrAdmin _routes={routes} />
  </StrictMode>
)
