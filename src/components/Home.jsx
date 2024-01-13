import { useEffect, useState } from 'react'
import "../styles/Home.css"
import Metrics from './Metrics.jsx'
import Footer from './Footer.jsx'
import Gallery from './Gallery.jsx'
import FAQ from './FAQ.jsx'
import Conclusion from './Conclusion.jsx'
import Servicio from './Servicio.jsx'
import { Fade, Zoom } from "react-awesome-reveal";
import videoBg from "../assets/background.mp4"
import Navbar from "./Navbar.jsx"
import { useTranslation } from 'react-i18next'

function Home() {
    const { t } = useTranslation();

    const [faqs, setfaqs] = useState([]);

    useEffect(() => {
        const faqsData = [
            {
                question: t("home.faq1"),
                answer: t("home.ans1"),
                open: false
            },
            {
                question: t("home.faq2"),
                answer: t("home.ans2"),
                open: false
            },
            {
                question: t("home.faq3"),
                answer: t("home.ans3"),
                open: false
            },
            {
                question: t("home.faq4"),
                answer: t("home.ans4"),
                open: false
            }
        ];
        setfaqs(faqsData);
    }, [t]);

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
            <div className="overlay"></div>
            <video src={videoBg} autoPlay loop muted play className='background' />
            <div className="content">
                <Navbar />
                <div className='home_container-two'>
                    <div className='title_container'>
                        <Fade>
                            <h1 className='title_desc'>
                                {t("home.title")}
                            </h1>
                        </Fade>
                    </div>
                    <div className="vid_container">
                        <Fade>
                            <iframe width="860" height="415" src="https://www.youtube.com/embed/dvvLhlbpHtI?si=cTebLCeX9CodY383" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;"></iframe>
                        </Fade>
                    </div>
                </div>
                <button className='home_btn'>
                    <Zoom>
                        <a target='_blank' rel='noreferrer' href="https://calendly.com/mediagrowthhub/30min">{t("home.button")}</a>
                    </Zoom>
                </button>
            </div>
            <Gallery />
            <Servicio />
            <Metrics />
            <Conclusion />
            <Fade>
                <div className="faqs">
                    <h2 className='faqs-title'>{t("home.faq-title")}</h2>
                    {faqs.map((faq, i) => (
                        <FAQ key={i} faq={faq} index={i} toggleFAQ={toggleFAQ} />
                    ))}
                </div>
            </Fade>
            <Footer />
        </div>
    )
}

export default Home