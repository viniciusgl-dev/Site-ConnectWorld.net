import verifica from '../img/verifica.png';

const CardPlanos = ({ velocidade, preco, beneficios, recomendado }) => {
  return (
    <div className={`card-plano ${recomendado ? "destaque" : ""}`}>

      {recomendado && (
        <div className="label-recomendado">Recomendado</div>
      )}

      <h3>Internet</h3>
      <h1>{velocidade}</h1>

      <div className="diferencial-catalogo">
        {beneficios.map((item, index) => (
          <span key={index}>
            <img src={verifica} alt="verifica" />
            {item}</span>
        ))}
      </div>

      <div className="preco-catalogo"><span>Por </span>{preco}<span>/Mês</span></div>

      <div className="assinar">
        <a href="#">Assine agora</a>
      </div>
    </div>
  )
}

export default CardPlanos