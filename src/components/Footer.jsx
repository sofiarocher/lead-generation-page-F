import "../styles/Footer.css"
import { Fade } from "react-awesome-reveal"

function Footer() {
  return (
    <div className='footer_container'>
      <Fade>
        <p className='footer_dev'>Desarrollado por<a target='_blank' rel="noreferrer" href="https://www.instagram.com/srocher_/"> srocher.</a></p>
        <p>2024 &copy; Copyright reserved by Media Growth Hub</p>
      </Fade>
    </div>
  )
}

export default Footer