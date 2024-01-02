import "../styles/Servicio.css"
import lucid from "../assets/lucid.png"
import { Fade, Zoom } from "react-awesome-reveal"

function Servicio() {
  return (
    <div className="services">
        <div className="serv_container">
            <Fade cascade damping={0.2}>
                <h2 className="serv_title">¿CÓMO NOS MANEJAMOS?</h2>
                <p className="serv_p">
                    Dentro de <span className="serv-span-two">Media Growth Hub</span> nos encargamos de establecer los 5 pilares por los cuales hacemos que tu marca personal crezca.
                    <br /><br />
                    Instalaremos nuestro sistema de adquisición de clientes y ventas en tu negocio, a través de contenido orgánico y estrategias personalizadas de prospección y conversión.
                    <br /><br />
                    De esta manera te generamos un nuevo activo de venta: <span className="serv-span">tu marca personal.</span>
                </p>
                <p className="serv_p">Trabajaremos de manera personalizada con tu negocio y te entregaremos la estructura completa para convertirte en un referente en redes sociales.</p>
                <img src={lucid} alt="" className="serv_img"/>
                <ul className="serv_list">
                    <p className="serv_list-title">Trabajamos con expertos en:</p>
                    <li className="serv_li"><span className="serv-span">Análisis de datos: </span> Se encargará de realizar un análisis de mercado y competencia para tu nicho específico y obtener la información precisa de lo que está generando resultados.</li>
                    <li className="serv_li"><span className="serv-span">Edición de video: </span> Se encargarán de editar tu contenido de la manera mas profesional y atractiva para lograr esa diferenciación que buscamos.</li>
                    <li className="serv_li"><span className="serv-span">Diseño gráfico: </span> Se encargarán de realizar las portadas, de manera que llamen la atención de la audiencia y hagan click para ver tu reel.</li>
                    <li className="serv_li"><span className="serv-span">Copywriting: </span> Se encargarán de realizar los guiones más cautivantes con formato AIDA (Atención, interés, deseo y acción). Una primera frase que llame la atención, una estructura que genere interés y deseo en nuestra audiencia y finalmente un llamado a la acción, ya sea para que interactúen con nuestro contenido o redirigirlos a un embudo de ventas.</li>
                    <li className="serv_li"><span className="serv-span">Ventas: </span> Se encargarán de capacitar a tu equipo para aumentar la tasa de conversión de clientes lo máximo posible.</li>
                    <li className="serv_li"><span className="serv-span">Marketing: </span> Se encargarán de estructurar una estrategia para tu negocio de manera personalizada para obtener los resultados que deseas.</li>
                </ul>
                <p className="serv_p">
                    Entendemos la importancia de delegar una estructura tan demandante de tiempo para los dueños de negocio como nosotros.
                    <br /><br />
                    De esta manera <span className="serv-span">solo necesitaras dedicarle como máximo 2hs por semana,</span> nosotros nos encargamos del resto!
                </p>
                <Zoom>
                    <button className='serv_btn'><a target='_blank' rel="noreferrer" href="https://calendly.com/mediagrowthhub/30min">AGENDÁ UNA LLAMADA AHORA!</a></button>
                </Zoom>
            </Fade>
        </div>
    </div>
  )
}

export default Servicio