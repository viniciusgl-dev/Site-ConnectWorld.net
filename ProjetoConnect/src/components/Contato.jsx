import instagram from '../img/instagram.png'
import whatsapp from '../img/whatsapp.png'
import "./Contato.css"

const Contato = () => {
  return (
    <section id='contato' className="redes-container">
        
      <div className="redes-titulo">
        <h2>Conecte-se com a gente</h2>
        <p>Siga nossas redes sociais e fique por dentro das novidades.</p>
        <p id="bottom">
          Nossa equipe está pronta para atender você e oferecer
          o melhor suporte da região.
        </p>
      </div>

      <div className="redes-cards">

        <a href="#" className="rede-card instagram">
          <img src={instagram} alt="" />
          <span>Instagram</span>
        </a>

        <a href="#" className="rede-card whatsapp">
          <img src={whatsapp} alt="" />
          <span>WhatsApp</span>
        </a>
      </div>

    </section>
  )
}

export default Contato