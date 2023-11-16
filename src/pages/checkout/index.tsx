import { BackLink } from "@/components/BackLink";
import { Button } from "@/components/Button";
import { Checkbox } from "@/components/Checkbox";
import { Input } from "@/components/Input";
import { Select } from "@/components/Select";

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

          <form
            className="checkout-form"
            method="post"
            aria-label="Insira as suas informações para realizar o pagamento"
          >
            <fieldset className="checkout-form-section">
              <legend className="checkout-form-section-title">1 - Cadastro</legend>

              <div className="checkout-form-section-fields">
                <div className="fields">
                  <Input label="Nome" id="name" name="name" placeholder="Insira seu nome aqui"
                    autoComplete="on"
                  />

                  <Input label="E-mail" type="email" id="email" name="email" placeholder="Insira seu e-mail aqui"
                    autoComplete="on"
                  />

                  <div className="row">
                    <Input label="CPF" id="cpf" name="cpf" placeholder="Insira seu CPF aqui"
                      autoComplete="on"
                    />

                    <Input label="DDD + Celular" id="phone" name="phone" placeholder="(99) 99999-9999"
                      autoComplete="on"
                    />
                  </div>

                  <div className="row">
                    <Input label="CEP" id="cep" name="cep" placeholder="00000-000"
                      autoComplete="on"
                    />

                    <Button type="button" variant="outline-primary">
                      Buscar CEP
                    </Button>
                  </div>

                  <Input label="Endereço" id="address" name="address"
                    autoComplete="on"
                  />

                  <div className="row">
                    <Input label="Bairro" id="district" name="district"
                      autoComplete="on"
                    />

                    <Input type="number" label="Número" id="number" name="number" placeholder="00"
                      autoComplete="on"
                      min={1}
                    />
                  </div>

                  <div className="row">
                    <Input label="Cidade" id="city" name="city"
                      autoComplete="on"
                    />

                    <Input label="UF" id="uf" name="uf"
                      autoComplete="on"
                    />
                  </div>

                  <Checkbox label="Aceito receber novidades do Com Cajú via e-mail." id="accept" name="accept" />

                  <Button>
                    Continuar
                  </Button>
                </div>
              </div>
            </fieldset>

            <fieldset className="checkout-form-section active">
              <legend className="checkout-form-section-title">2 - Pagamento</legend>

              <div className="checkout-form-section-fields">
                <div className="payment">
                  <div className="payment-title">
                    Qual a forma de pagamento?
                  </div>

                  <div className="payment-list">
                    <div className="payment-list-item">
                      <strong className="payment-list-item-title">
                        Cartão de crédito
                      </strong>

                      <p className="payment-list-item-desc">
                        Parcele em até 10x sem juros
                      </p>

                      <div className="payment-list-item-form">
                        <div className="row">
                          <Input label="Número do cartão" />
                          <Input label="Vencimento" />
                        </div>

                        <div className="row">
                          <Input label="Nome impresso no cartão" />
                          <Input label="CVV" type="number" />
                        </div>

                        <Select label="Parcelas">
                          {Array.from({ length: 10 }).map((_, i) => {
                            const value = Intl.NumberFormat('pt-BR', { style: "currency", currency: "BRL" }).format(Number((199.9 / (i + 1)).toFixed(2)));

                            return (
                              <option value={value} key={value}>
                                {i + 1}x de {value} sem juros
                              </option>
                            );
                          })}
                        </Select>
                      </div>
                    </div>

                    <div className="payment-list-item">
                      <strong className="payment-list-item-title">
                        Boleto bancário
                      </strong>
                      <p className="payment-list-item-desc">
                        O pagamento está sujeito a aprovação (1 a 3 dias)
                      </p>
                    </div>

                    <div className="payment-list-item">
                      <strong className="payment-list-item-title">
                        Pix
                      </strong>
                      <p className="payment-list-item-desc">
                        Pague via QR Code
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </fieldset>
          </form>
        </section>
      </div>
    </div>
  );
}