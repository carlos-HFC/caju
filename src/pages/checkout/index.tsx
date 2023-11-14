import { BackLink } from "@/components/BackLink";

export default function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout-body">
        <BackLink />

        <section className="checkout-message">
          <div className="checkout-message-title">
            Checkout
          </div>

          <p className="checkout-message-description">
            Agora falta pouco! Para realizar seu pagamento, preencha o formulário de cadastro.
          </p>
        </section>

        <section className="checkout-resume">
          <article className="checkout-resume-info">
            <div className="checkout-resume-info-title">
              Resumo da compra
            </div>

            <div className="checkout-resume-info-description">
              Curso Veganismo Criativo <br /> (Individual)
            </div>

            <div className="checkout-resume-info-value">
              <div className="value-title">
                Total a pagar
              </div>
              <div className="value-price">
                R$ 199,90
              </div>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
}