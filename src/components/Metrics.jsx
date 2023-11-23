import "./Metrics.css"
import metric1 from "../assets/metric1.jpg"
import metric2 from "../assets/metric2.jpg"
import metric3 from "../assets/metric3.jpg"
import metric4 from "../assets/metric4.jpg"

function Metrics() {
  return (
    <div className='container'>
        <h2 className="metrics_title">NUESTRAS PRUEBAS</h2>
      <div className='metrics_container'>
        <div className='results1_container'>
          <h2 className='title_mediagrowth'><span className='red-text'>SIN </span>MediaGrowth</h2>
          <img src={metric1} className='img_results1 img_1'/>
          <img src={metric2} className='img_results1 img_2'/>
        </div>
        <div className='results2_container'>
          <h2 className='title_mediagrowth'><span className='purple-text'>CON </span>MediaGrowth</h2>
          <img src={metric3} className='img_results2 img_1'/>
          <img src={metric4} className='img_results2 img_2'/>
        </div>
      </div>
    </div>
  )
}

export default Metrics