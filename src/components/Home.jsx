import { useState } from 'react'
import "../styles/Home.css"
import Metrics from './Metrics.jsx'
import Footer from './Footer.jsx'
import Gallery from './Gallery.jsx'
import FAQ from './FAQ.jsx'
import Conclusion from './Conclusion.jsx'
import Servicio from './Servicio.jsx'
import { Fade } from "react-awesome-reveal";
import Background from './Background.jsx'


function Home() {
  const [faqs, setfaqs] = useState([
    {
      question: '¿Cuánto tiempo lleva activar el servicio?',
      answer: 'En 7 días como MÁXIMO estaremos en condiciones de iniciar con la acción.',
      open: false
    },
    {
      question: '¿Funciona para mí si mi nicho de mercado es muy específico?',
      answer: 'Por supuesto, ya que lo primero que hacen nuestros profesionales es estudiar y analizar a fondo tu nicho, para entender de la mejor manera qué es lo que está generando los resultados que deseamos.',
      open: false
    },
    {
      question: '¿Funciona para mí si no tengo redes sociales o mis redes sociales tienen poca presencia?',
      answer: 'Justamente nos dedicamos a potenciar las marcas personales y redes sociales de nuestros clientes ya sea que tengan cuentas con pocos seguidores o más destacadas y quieran ir al siguiente nivel.',
      open: false
    },
    {
      question: '¿Qué riesgos corro entrando al programa?',
      answer: "El riesgo que corres es NO entrar al programa, ya que seguirás de la misma manera, obteniendo los mismos resultados que tienes ahora. Si quieres los resultados que deseas, te invito a que agendes una llamada gratuita.",      
      open: false
    }
  ]);

  const toggleFAQ = index => {
    setfaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open
      } else {
        faq.open = false;
      }
      return faq;
    }))
  }

  return (
    <div>
      <Background/>
      <div className='home_container'>
      <Gallery/>
        <Servicio/>
        <Metrics/>
        <Conclusion/>
          <Fade>
            <div className="faqs">
              <h2 className='faqs-title'>Preguntas Frecuentes</h2>
              {faqs.map((faq, i) => (
                <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ}/>
              ))}
            </div>
          </Fade>
        <Footer/>
      </div>
    </div>
  )
}

export default Home