import "./Navbar.css"
import logo from "../assets/logo.jpeg"

function Navbar() {
  return (
    <div className='nav_container'>
        <div className='logo_container'>
          <img className="nav_img" src= {logo} />
          <p className='nav_p'>MediaGrowth</p>
        </div>
        <button className='nav_btn'><a target='_blank'>ENG/ESP</a></button>
    </div>
  )
}

export default Navbar