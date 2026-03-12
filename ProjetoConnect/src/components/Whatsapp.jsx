import whatsapp from "../img/whatsappfixo.png"
import "./Whatsapp.css"

const Whatsapp = () => {
  return (
     <a
      href="https://wa.me/5588993840956?text=Olá,%20tenho%20interesse%20nos%20planos%20de%20internet"
      className="whatsapp-fixo"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={whatsapp} alt="WhatsApp" />
    </a>
  )
}

export default Whatsapp