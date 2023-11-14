import React from 'react'
import "./Home.css"
import Metrics from './Metrics.jsx'
import Footer from './Footer.jsx'
import Gallery from './Gallery.jsx'

function Home() {
  return (
    <div className='home_container'>
      <div className='home_container-two'>
        <div className='title_container'>
          <h1 className='title_desc'>
            Cómo agregar 10k, 20k y hasta 30k en 60 días en tu negocio digital, infoproductos o agencia de coaching.
          </h1>
          <p className='title_p'>
            Texto descriptivo de la propuesta y cómo le solucionan el problema al cliente. 
          </p>
        </div>
        <div className="vid_container">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/dvvLhlbpHtI?si=cTebLCeX9CodY383" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;"></iframe>
        </div>
     </div>
      <button className='home_btn'><a target='_blank' href="https://calendly.com/mediagrowthhub/30min">AGENDÁ UNA LLAMADA AHORA!</a></button>
      <Gallery/>
      <Metrics/>
      <Footer/>
    </div>
  )
}

export default Home