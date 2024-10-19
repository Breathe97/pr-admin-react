import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import PrAdmin from './pr-admin/index'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PrAdmin />
  </StrictMode>
)
