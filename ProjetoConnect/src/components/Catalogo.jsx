import CardPlano from './CardPlanos'
import "./Catalogo.css"

const planos = [
  {
    velocidade: "100 MEGA",
    preco: "R$ 59,90",
    beneficios: [
      "Instalação gratuita",
      "100% fibra óptica",
      "Conexão estável"
    ],
    recomendado: false
  },
  {
    velocidade: "200 MEGA",
    preco: "R$ 69,90",
    beneficios: [
      "Instalação gratuita",
      "100% fibra óptica",
      "Conexão estável"
    ],
    recomendado: true
  },
  {
    velocidade: "300 MEGA",
    preco: "R$ 79,90",
    beneficios: [
      "Instalação gratuita",
      "100% fibra óptica",
      "Wi-Fi Turbo"
    ],
    recomendado: false
  },
  {
    velocidade: "400 MEGA",
    preco: "R$ 89,90",
    beneficios: [
      "Instalação gratuita",
      "100% fibra óptica",
      "Ultra velocidade"
    ],
    recomendado: false
  }
]

const Catalogo = () => {
  return (
    <div id='catalogo' className="container-catalogo">

      <div className="titulo-catalogo">
        <h1>
          Assine os melhores planos da região e tenha a internet mais rápida e estável para conectar tudo o que importa.
        </h1>
      </div>

      <div className="catalogo-corpo">
        {planos.map((plano, index) => (
          <CardPlano
            key={index}
            velocidade={plano.velocidade}
            preco={plano.preco}
            beneficios={plano.beneficios}
            recomendado={plano.recomendado}
          />
        ))}
      </div>

    </div>
  )
}

export default Catalogo