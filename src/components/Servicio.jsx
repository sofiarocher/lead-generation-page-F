import "../styles/Servicio.css"
import lucid from "../assets/lucid.png"
import { Fade, Zoom } from "react-awesome-reveal"
import { useTranslation } from "react-i18next";

function Servicio() {
    const { t } = useTranslation();
  return (
    <div className="services">
        <div className="serv_container">
            <Fade cascade damping={0.1}>
                <h2 className="serv_title">{t("serv.title")}</h2>
                <p className="serv_p">
                {t("serv.p")} <span className="serv-span-two">{t("serv.span")}</span> {t("serv.p2")}
                    <br /><br />
                    {t("serv.p3")}
                    <br /><br />
                    {t("serv.p4")} <span className="serv-span">{t("serv.span2")}</span>
                </p>
                <p className="serv_p">{t("serv.p5")}</p>
                <img src={lucid} alt="" className="serv_img"/>
                <ul className="serv_list">
                    <p className="serv_list-title">{t("serv.list-title")}</p>
                    <li className="serv_li"><span className="serv-span">{t("serv.li1")}</span> {t("serv.ul1")}</li>
                    <li className="serv_li"><span className="serv-span">{t("serv.li2")}</span> {t("serv.ul2")}</li>
                    <li className="serv_li"><span className="serv-span">{t("serv.li3")}</span> {t("serv.ul3")}</li>
                    <li className="serv_li"><span className="serv-span">{t("serv.li4")}</span> {t("serv.ul4")}</li>
                    <li className="serv_li"><span className="serv-span">{t("serv.li5")}</span> {t("serv.ul5")}</li>
                    <li className="serv_li"><span className="serv-span">{t("serv.li6")}</span> {t("serv.ul6")}</li>
                </ul>
                <p className="serv_p">
                    {t("serv.p6")}
                    <br /><br />
                    {t("serv.p7")}<span className="serv-span">{t("serv.span3")}</span> {t("serv.p8")}
                </p>
                <Zoom>
                    <button className='serv_btn'><a target='_blank' rel="noreferrer" href="https://calendly.com/mediagrowthhub/30min">{t("serv.button")}</a></button>
                </Zoom>
            </Fade>
        </div>
    </div>
  )
}

export default Servicio