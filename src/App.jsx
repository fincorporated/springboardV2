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
import Contributors from './pages/contributors/contributors';
import FAQ from './pages/faq/faq'
import Footer from './pages/footer/footer';
import Contact from './pages/contact/contact'

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
        <WhatToExpect />
        <Apply />   
        <TestimonyPage />
        <Donate/>
        <Contributors />
        <FAQ />
        <Contact />
        <Footer />
      </div>

    </>
  )
}

export default App
