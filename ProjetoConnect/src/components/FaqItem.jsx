import { useState } from "react";

const FaqItem = ({ pergunta, resposta }) => {
    const [aberto, setAberto] = useState(false);

    return (
        <div className="faq-item">
            <div
                className="faq-pergunta"
                onClick={() => setAberto(!aberto)}
            >
                <span>{pergunta}</span>
                <span className={`seta ${aberto ? "girar" : ""}`}>
                    +
                </span>
            </div>

            <div className={`faq-resposta ${aberto ? "ativa" : ""}`}>
                {resposta}
            </div>
        </div>
    );
};

export default FaqItem;