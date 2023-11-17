import axios from "axios";
import { ChangeEvent, useCallback, useState } from "react";

import { BackLink } from "@/components/BackLink";
import { Button } from "@/components/Button";
import { Checkbox } from "@/components/Checkbox";
import { Input } from "@/components/Input";
import { Select } from "@/components/Select";

import { mask } from "@/utils/mask";

type CepResponse = {
  logradouro: string;
  bairro: string;
  cep: string;
  localidade: string;
  uf: string;
  erro?: boolean;
};

const INITIAL_STATE = {
  name: "",
  email: "",
  cpf: "",
  phone: "",
  cep: "",
  address: "",
  district: "",
  number: "",
  city: "",
  uf: "",
  cardnumber: "",
  expires: "",
  cardname: "",
  cvv: "",
  parcels: ""
};

export default function Checkout() {
  const [formActive, setFormActive] = useState('register');
  const [data, setData] = useState(INITIAL_STATE);
  const [hasAddress, setHasAddress] = useState(true);
  const [hasDistrict, setHasDistrict] = useState(true);

  const onChange = useCallback(
    (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setData(prev => ({
        ...prev,
        [event.target.name]: event.target.value
      }));
    },
    [data],
  );

  const searchCep = useCallback(
    async () => {
      try {
        const response = await axios.get<CepResponse>(`https://viacep.com.br/ws/${data.cep}/json/`);

        if (response.data.erro) {
          return;
        }

        const { bairro, localidade, logradouro, uf } = response.data;

        setHasAddress(Boolean(logradouro));
        setHasDistrict(Boolean(bairro));

        setData(prev => ({
          ...prev,
          uf,
          district: bairro,
          city: localidade,
          address: logradouro
        }));
      } catch (error) {
        console.log(error);
      }
    },
    [data],
  );

  const disabledButtonRegister = useCallback(
    () => {
      let required = { ...data };
      delete (required as any)?.number;
      delete (required as any)?.cardnumber;
      delete (required as any)?.cardname;
      delete (required as any)?.cvv;
      delete (required as any)?.expires;
      delete (required as any)?.parcels;

      return Object.values(required).some(item => !item.trim());
    },
    [data],
  );

  const disabledButtonPayment = useCallback(
    () => {
      let required = { ...data };
      delete (required as any)?.number;

      return Object.values(required).some(item => !item.trim());
    },
    [data],
  );

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
            <fieldset className={["checkout-form-section", formActive === 'register' ? 'active' : ''].join(' ')}>
              <legend className="checkout-form-section-title">1 - Cadastro</legend>

              <div className="checkout-form-section-fields">
                <div className="fields">
                  <Input label="Nome" id="name" name="name" placeholder="Insira seu nome aqui"
                    autoComplete="on"
                    value={data.name}
                    onChange={onChange}
                  />

                  <Input label="E-mail" type="email" id="email" name="email" placeholder="Insira seu e-mail aqui"
                    autoComplete="on"
                    value={data.email}
                    onChange={onChange}
                  />

                  <div className="row">
                    <Input label="CPF" id="cpf" name="cpf" placeholder="Insira seu CPF aqui"
                      autoComplete="on"
                      value={mask('cpf', data.cpf)}
                      onChange={onChange}
                    />

                    <Input label="Telefone" id="phone" name="phone" placeholder="(99) 99999-9999"
                      autoComplete="on"
                      value={mask('phone', data.phone)}
                      onChange={onChange}
                    />
                  </div>

                  <div className="row">
                    <Input label="CEP" id="cep" name="cep" placeholder="00000-000"
                      autoComplete="on"
                      value={mask('cep', data.cep)}
                      onChange={onChange}
                    />

                    <Button type="button" variant="outline-primary" onClick={searchCep}>
                      Buscar CEP
                    </Button>
                  </div>

                  <Input label="Endereço" id="address" name="address" disabled={hasAddress}
                    autoComplete="on"
                    value={data.address}
                    onChange={onChange}
                  />

                  <div className="row">
                    <Input label="Bairro" id="district" name="district" disabled={hasDistrict}
                      autoComplete="on"
                      value={data.district}
                      onChange={onChange}
                    />

                    <Input type="number" label="Número" id="number" name="number" placeholder="00"
                      autoComplete="on"
                      min={1}
                      value={data.number}
                      onChange={onChange}
                    />
                  </div>

                  <div className="row">
                    <Input label="Cidade" id="city" name="city" disabled
                      autoComplete="on"
                      value={data.city}
                      onChange={onChange}
                    />

                    <Input label="UF" id="uf" name="uf" disabled
                      autoComplete="on"
                      value={data.uf}
                      onChange={onChange}
                    />
                  </div>

                  <Checkbox label="Aceito receber novidades do Com Cajú via e-mail." id="accept" name="accept" />

                  <Button type="button" onClick={() => setFormActive('payment')} disabled={disabledButtonRegister()}>
                    Continuar
                  </Button>
                </div>
              </div>
            </fieldset>

            <fieldset className={["checkout-form-section", formActive === 'payment' ? 'active' : ''].join(' ')}>
              <legend className="checkout-form-section-title">2 - Pagamento</legend>

              <div className="checkout-form-section-fields">
                <div className="payment">
                  <div className="payment-item">
                    <strong className="payment-item-title">
                      Cartão de crédito
                    </strong>

                    <p className="payment-item-desc">
                      Parcele em até 10x sem juros
                    </p>

                    <div className="payment-item-form">
                      <div className="row">
                        <Input label="Número do cartão" id="cardnumber" name="cardnumber"
                          autoComplete="cc-number"
                          value={mask('card', data.cardnumber)}
                          onChange={onChange}
                        />
                        <Input label="Vencimento" id="expires" name="expires"
                          autoComplete="cc-exp"
                          value={mask('date', data.expires)}
                          onChange={onChange}
                        />
                      </div>

                      <div className="row">
                        <Input label="Nome impresso no cartão" id="cardname" name="cardname"
                          autoComplete="cc-name"
                          value={data.cardname}
                          onChange={onChange}
                        />
                        <Input label="CVV" id="cvv" name="cvv"
                          autoComplete="cc-csc"
                          value={mask('cvv', data.cvv)}
                          onChange={onChange}
                        />
                      </div>

                      <Select label="Parcelas" id="parcels" name="parcels" placeholder="Selecione em quantas parcelas"
                        value={data.parcels}
                        onChange={onChange}
                      >
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

                  <div className="payment-footer">
                    <Button type="button" variant="outline-secondary" onClick={() => setFormActive('register')}>
                      Voltar
                    </Button>

                    <Button type="button" disabled={disabledButtonPayment()}>
                      Realizar pagamento
                    </Button>
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