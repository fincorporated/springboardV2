import { useState } from 'react'
import './App.css'
import Hero from './pages/hero/hero'
import VideoPage from './pages/video/videoPage'
import NavBar from './elements/navBar/navBar'
import AboutPage from './pages/about/about'
import TestimonyPage from './pages/testimonials/testimonials';
import QuoteBlock from './pages/quoteBlock/quoteBlock';
import WhatToExpect from './pages/whatToExpect/whatToExpect';
import Apply from './pages/apply/apply';
import Donate from './pages/donate/donate';
import FAQ from './pages/faq/faq'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <div id='pages'>
        <Hero />
        <VideoPage />    
        <QuoteBlock />
        <AboutPage />    
        <TestimonyPage />
        <WhatToExpect />
        <Apply />
        <Donate/>
        <FAQ />
      </div>

    </>
  )
}

export default App
