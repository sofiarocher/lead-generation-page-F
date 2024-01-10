import "../styles/Conclusion.css"
import { Fade, Zoom } from "react-awesome-reveal"
import { useTranslation } from "react-i18next"

function Conclusion() {
  const { t } = useTranslation();

  return (
    <div className="conclude">
        <Fade>
          <div className="conc_container">
              <h2 className="conc_title">{t("conc.title")}</h2>
              <ul className="conc_list">
                  <li className="conc_li"><span className="number">1. </span> {t("conc.li1")}<span className="text-red"> {t("conc.span1")} </span>{t("conc.li11")}</li>
                  <li className="conc_li"><span className="number">2. </span> {t("conc.li2")} <span className="text-purple">{t("conc.span2")}</span></li>
              </ul>
              <p className="conc_p">{t("conc.p1")}</p>
              <p className="conc_p">{t("conc.p2")}</p>
              <Zoom>
                <button className='conc_btn'><a target='_blank' rel="noreferrer" href="https://calendly.com/mediagrowthhub/30min">{t("conc.button")}</a></button>
              </Zoom>
          </div>
        </Fade>
    </div>
  )
}

export default Conclusion