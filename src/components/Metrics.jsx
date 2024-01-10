import "../styles/Metrics.css"
import metric1 from "../assets/metric1.jpg"
import metric2 from "../assets/metric2.jpg"
import metric3 from "../assets/metric3.jpg"
import metric4 from "../assets/metric4.jpg"
import { Fade } from "react-awesome-reveal"
import { useTranslation } from "react-i18next"

function Metrics() {
  const { t } = useTranslation();
  return (
    <div className='container'>
       <Fade>
       <h2 className="metrics_title">{t("metrics.title")}</h2>
        <div className='metrics_container'>
          <div className='results1_container'>
            <h2 className='title_mediagrowth'><span className='red-text'>{t("metrics.sin")} </span>MediaGrowth</h2>
            <img src={metric1} className='img_results1 img_1'/>
            <img src={metric2} className='img_results1 img_2'/>
          </div>
          <div className='results2_container'>
            <h2 className='title_mediagrowth'><span className='purple-text'>{t("metrics.con")} </span>MediaGrowth</h2>
            <img src={metric3} className='img_results2 img_1'/>
            <img src={metric4} className='img_results2 img_2'/>
          </div>
        </div>
       </Fade>
    </div>
  )
}

export default Metrics