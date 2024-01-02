import "../styles/FAQ.css"
import { Fade } from "react-awesome-reveal"

function FAQ ({faq, index, toggleFAQ}) {
	return (
		<div
			className={"faq " + (faq.open ? 'open' : '')}
			key={index}
			onClick={() => toggleFAQ(index)}
		>
			<Fade direction="left">
				<div className="faq-question">
					{faq.question}
				</div>
				<div className="faq-answer">
					{faq.answer}
				</div>
			</Fade>
		</div>
	)
}

export default FAQ