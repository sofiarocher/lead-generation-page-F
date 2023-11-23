import "./Conclusion.css"

function Conclusion() {
  return (
    <div className="conclude">
        <div className="conc_container">
            <h2 className="conc_title">En conclusión, tenés dos opciones:</h2>
            <ul className="conc_list">
                <li className="conc_li">No tomar acción, y <span className="text-red">seguir en el mismo camino </span>por el cual venís desde que empezaste. Seguir estando atado a lo que no te deja crecer, y no escalar tu agencia/negocio.</li>
                <li className="conc_li">Tener una llamada con nosotros, ver si realmente podemos ayudarte y brindarte las herramientas para aplicar esto en tu agencia/negocio, y <span className="text-purple">hacerlo funcionar.</span></li>
            </ul>
            <p className="conc_p">Pensá que decidís no tomar acción, seguir intentando construir y aplicar sistemas de los cuales no tenés experiencia, ¿realmente creés que podría funcionar de esta manera?</p>
            <p className="conc_p">Ahora, si decidís ir por la segunda opción, conocer realmente de alguien que sepa y pueda brindarte el camino correcto a seguir, déjame decirte que es la decisión más inteligente. Saber y conocer de personas que están donde vos querés estar...</p>
            <button className='conc_btn'><a target='_blank' href="https://calendly.com/mediagrowthhub/30min">QUIERO ESCALAR MI AGENCIA YA!</a></button>
        </div>
    </div>
  )
}

export default Conclusion