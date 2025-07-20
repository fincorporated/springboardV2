import { useState } from 'react'
import './App.css'
import Hero from './pages/hero/hero'
import VideoPage from './pages/video/videoPage'
import NavBar from './elements/navBar/navBar'
import AboutPage from './pages/about/about'
import TestimonyPage from './pages/testimonials/testimonials';
import QuoteBlock from './pages/quoteBlock/quoteBlock'

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
      </div>

    </>
  )
}

export default App
