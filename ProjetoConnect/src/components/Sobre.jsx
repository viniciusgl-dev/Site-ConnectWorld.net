import './Sobre.css'

const Sobre = () => {
    return (
        <section className="sobre-section" id="sobre">
            <div className="sobre-container">

                <div className="sobre-texto">
                    <h2>
                        Conectividade que evolui junto com você
                    </h2>

                    <p>
                        A Conect World.net é uma empresa local especializada em internet 100% fibra óptica, oferecendo velocidade, estabilidade e suporte técnico dedicado.
                    </p>

                    <p>
                        Nosso compromisso é conectar residências e comércios com atendimento próximo, ágil e transparente, garantindo uma experiência segura e confiável.
                    </p>
                </div>

                <div className="sobre-numeros">
            
                    <div className="info">
                        <h3>+1.500</h3>
                        <span>Clientes conectados</span>
                    </div>

                    <div className="info">
                        <h3>100%</h3>
                        <span>Fibra óptica</span>
                    </div>

                    <div className="info">
                        <h3>24h</h3>
                        <span>Suporte técnico</span>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Sobre