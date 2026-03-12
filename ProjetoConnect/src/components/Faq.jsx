import FaqItem from './FaqItem';
import './Faq.css'

const Faq = () => {
    return (
        <section id='faq' className="faq">
            <h2>Perguntas Frequentes</h2>
            <p>Reunimos aqui as respostas para as dúvidas mais comuns.</p>

            <div className="dividir">
                <FaqItem
                    pergunta="A instalação é gratuita?"
                    resposta="Sim! A instalação é totalmente gratuita para planos residenciais dentro da área de cobertura."
                />

                <FaqItem
                    pergunta="A internet é 100% fibra?"
                    resposta="Sim. Trabalhamos com tecnologia 100% fibra óptica até a sua casa, garantindo mais estabilidade e velocidade.."
                />

                <FaqItem
                    pergunta="Qual o prazo para instalação?"
                    resposta="Após a confirmação da contratação, a instalação é realizada em até 48 horas úteis."
                />
                <FaqItem
                    pergunta="Preciso pagar taxa de cancelamento?"
                    resposta="Não cobramos taxa de cancelamento. Você pode solicitar quando desejar, respeitando os termos contratuais."
                />
                <FaqItem
                    pergunta="Posso mudar de plano depois?"
                    resposta="Sim, você pode fazer upgrade ou downgrade conforme disponibilidade."
                />

                  <FaqItem
                    pergunta="Qual o horário de atendimento?"
                    resposta="Nosso atendimento funciona de segunda a sábado, das 8h às 18h."
                />

            </div>
        </section>
    );
};

export default Faq;