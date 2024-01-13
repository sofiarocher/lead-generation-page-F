import "../styles/Navbar.css"
import logo from "../assets/logo.png"
import { Fade } from "react-awesome-reveal";
import i18n from "../i18n";
import arg from "../assets/arg-flag.webp"
import usa from "../assets/usa-flag.png"
import { useState } from 'react';

function Navbar() {
  const [language, setLanguage] = useState(i18n.language);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <div className='nav_container'>
      <Fade>
        <div className='logo_container'>
          <img className="nav_img" src={logo} alt="Logo" />
          <p className='nav_p'>MediaGrowth</p>
        </div>
        <div>
        {language === 'es' ? (
            <p
              className={`nav_btn ${language === 'es' ? 'active' : ''}`}
              onClick={() => changeLanguage('en')}
            >
              ENG
              <img src={usa} alt="" width={30} className="btn-p" />
            </p>
          ) : (
            <p
              className={`nav_btn ${language === 'en' ? 'active' : ''}`}
              onClick={() => changeLanguage('es')}
            >
              ESP
              <img src={arg} alt="" width={30} className="btn-p" />
            </p>
          )}
        </div>
      </Fade>
    </div>
  );
}

export default Navbar;