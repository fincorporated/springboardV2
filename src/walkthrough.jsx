import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import Walkthrough from './walkthrough/walkthroughApp'
import AltWalkthroughApp from './walkthrough/altWalkthroughApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    < AltWalkthroughApp/>
  </StrictMode>,
)