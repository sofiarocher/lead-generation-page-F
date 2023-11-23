import { useState } from 'react'
import "./Home.css"
import Metrics from './Metrics.jsx'
import Footer from './Footer.jsx'
import Gallery from './Gallery.jsx'
import FAQ from './FAQ.jsx'
import Conclusion from './Conclusion.jsx'
import Servicio from './Servicio.jsx'

function Home() {
  const [faqs, setfaqs] = useState([
    {
      question: '¿Cuánto tiempo lleva activar esto?',
      answer: 'En 7 días como MÁXIMO estaremos en condiciones de iniciar con la acción.',
      open: false
    },
    {
      question: '¿Funciona para mí si mi nicho de mercado es muy específico?',
      answer: 'Con seguridad, ya que lo primero que hacen nuestros profesionales es estudiar y analizar a fondo tu nicho, para entender de la mejor manera qué es lo que está generando los resultados que deseamos.',
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
    <div className='home_container'>
      <div className='home_container-two'>
        <div className='title_container'>
          <h1 className='title_desc'>
          Este video de 5 minutos explica cómo ayudamos a empresas y creadores de contenido a destacarse en las redes sociales y a construir audiencia logrando la monetización deseada.
          </h1>
        </div>
        <div className="vid_container">
          <iframe width="860" height="415" src="https://www.youtube.com/embed/dvvLhlbpHtI?si=cTebLCeX9CodY383" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;"></iframe>
        </div>
     </div>
      <button className='home_btn'><a target='_blank' href="https://calendly.com/mediagrowthhub/30min">AGENDÁ UNA LLAMADA AHORA!</a></button> 
      <Gallery/>
      <Servicio/>
      <Metrics/>
      <Conclusion/>
      <div className="faqs">
        <h2 className='faqs-title'>Preguntas Frecuentes</h2>
        {faqs.map((faq, i) => (
          <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
        ))}
      </div>
      <Footer/>
    </div>
  )
}

export default Home