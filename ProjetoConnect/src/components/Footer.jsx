import logofooter from '../img/logofooter.png'
import telefone from '../img/telefone.png'
import localizacao from '../img/pino-de-localizacao.png'
import email from '../img/gmail.png'
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">

                <div className="footer-logo-center">
                    <img src={logofooter} alt="Conect World Net" />
                </div>

                <div className="footer-item">
                    <h2>Conect World.Net</h2>
                    <p>
                        Internet 100% fibra óptica com velocidade,
                        estabilidade e suporte de qualidade para sua casa
                        e empresa.
                    </p>
                </div>

                <div className="footer-item">
                    <h3>Links rápidos</h3>
                    <a href="#inicio">Início</a>
                    <a href="#catalogo">Planos</a>
                    <a href="#contato">Contato</a>
                </div>

                <div className="footer-item">
                    <h3>Nossos Planos</h3>
                    <p>100 Mega</p>
                    <p>200 Mega</p>
                    <p>300 Mega</p>
                    <p>400 Mega</p>
                </div>

                <div className="footer-item">
                    <h3>Contato</h3>
                    <div className="contato">
                        <img src={telefone} alt="" />
                        <span> (88) 99999-9999</span>
                    </div>

                    <div className="contato">
                        <img src={localizacao} alt="" />
                        <span> Várzea Alegre - CE</span>
                    </div>

                    <div className="contato">
                        <img src={email} alt="" />
                        <span> contato@conectworldnet.com</span>
                    </div>
                </div>

            </div>

            <div className="footer-copy">
                <p>© 2026 Conect World Net - Todos os direitos reservados</p>
            </div>
        </footer>
    )
}

export default Footer