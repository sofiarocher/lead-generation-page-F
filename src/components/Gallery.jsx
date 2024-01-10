import "../styles/Gallery.css"
import { Fade } from "react-awesome-reveal";
import Reels from "./Reels";
import { useTranslation } from "react-i18next";


function Gallery() {

  const { t } = useTranslation();

  return (
    <div className='gallery_container'>
      <Fade>
        <h2 className="gallery_title">{t("gallery.title")}<span className="text-purple">{t("gallery.span")}</span> {t("gallery.title2")} <span className="text-red">{t("gallery.span2")}</span> {t("gallery.title3")}</h2>
      </Fade>
      <Reels/>
    </div>
  )
}

export default Gallery