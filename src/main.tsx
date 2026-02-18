import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PaymentView from './PaymentView'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PaymentView />
  </StrictMode>,
)
