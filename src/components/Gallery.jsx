import "../styles/Gallery.css"
import { Fade } from "react-awesome-reveal";
import Reels from "./Reels";


function Gallery() {
  return (
    <div className='gallery_container'>
      <Fade>
        <h2 className="gallery_title">De esta forma le generamos una facturación total de más de <span className="text-purple">100.000 USD</span> a nuestros clientes <span className="text-red">en los últimos 90 días</span> mediante nuestra estrategia de contenido.</h2>
      </Fade>
      <Reels/>
    </div>
  )
}

export default Gallery