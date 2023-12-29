import "./Navbar.css"
import logo from "../assets/logo.jpeg"
import { Fade } from "react-awesome-reveal";

function Navbar() { 
  return (
      <div className='nav_container'>
        <Fade>
        <div className='logo_container'>
          <img className="nav_img" src= {logo} />
          <p className='nav_p'>MediaGrowth</p>
        </div>
        <div>
          <button className='nav_btn'><a href="">ESP/ENG</a></button>
        </div>
       </Fade>
      </div>
    
  )
}

export default Navbar