import { useTranslation } from 'react-i18next';
import "../styles/Footer.css"
import { Fade } from "react-awesome-reveal"

function Footer() {
  const { t } = useTranslation();

  return (
    <div className='footer_container'>
      <Fade>
        <p className='footer_dev'>{t("footer.dev")}<a target='_blank' rel="noreferrer" href="https://www.instagram.com/srocher_/"> srocher.</a></p>
        <p>2024 &copy; {t("footer.copy")}</p>
      </Fade>
    </div>
  )
}

export default Footer