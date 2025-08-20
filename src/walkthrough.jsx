import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Walkthrough from './walkthrough/walkthroughApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    < Walkthrough/>
  </StrictMode>,
)