import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import WalkthroughApp from './walkthroughApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    < WalkthroughApp/>
  </StrictMode>,
)