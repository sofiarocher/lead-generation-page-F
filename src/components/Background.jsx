import videoBg from '../assets/background.mp4'
import "../styles/Background.css"
import "../styles/Home.css"
import { Zoom, Fade } from 'react-awesome-reveal'
import Navbar from "./Navbar"

const Background = () => {
  return (
    <div className='main'>
        <div className="overlay"></div>
        <video src={videoBg} autoPlay loop muted />
        <div className='home_container-two content'>
            <Navbar/>
            <div className='title_container'>
            <Fade>
                <h1 className='title_desc'>
                Este video de 5 minutos explica cómo ayudamos a empresas y creadores de contenido a destacarse en las redes sociales y a construir audiencia logrando la monetización deseada.
                </h1>
            </Fade>
            </div>
            <div className="vid_container">
            <Fade>
                <iframe width="860" height="415" src="https://www.youtube.com/embed/dvvLhlbpHtI?si=cTebLCeX9CodY383" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;"></iframe>
            </Fade>
            </div>
            <button className='home_btn'>
                <Zoom>
                    <a target='_blank' rel='noreferrer' href="https://calendly.com/mediagrowthhub/30min">AGENDÁ UNA LLAMADA AHORA!</a>    
                </Zoom>
            </button> 
        </div>
  </div>
  )
}

export default Background