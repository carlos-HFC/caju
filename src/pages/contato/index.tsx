import Image from "next/image";
import Link from "next/link";

import { Icon } from "@/components/Icon";
import { Input } from "@/components/Input";
import { Select } from "@/components/Select";
import { Button } from "@/components/Button";

export default function Contato() {
  return (
    <div className="contact">
      <Image
        src="/nuts.png"
        alt="Nozes"
        width={839}
        height={839}
        className="contact-image"
      />

      <div className="contact-body">
        <Link href="/" className="contact-back">
          <Icon name="arrow-left" />
          Voltar
        </Link>

        <section className="contact-message">
          <div className="contact-message-title">
            Ficou com dúvidas?
          </div>

          <div className="contact-message-description">
            <p className="contact-message-description-text">
              Nós temos um canal de dúvidas frequentes, e você pode acessar <Link href="/#doubt">clicando aqui</Link>.
            </p>
            <p className="contact-message-description-text">
              Se você ainda tem dúvidas ou quer conversar conosco, nos envie um e-mail para <strong>contato@comcaju.com</strong>, ou preencha o formulário a seguir.
            </p>
          </div>
        </section>

        <form
          className="contact-form"
          method="post"
        >
          <Input label="Nome" id="name" name="name" placeholder="Insira seu nome aqui"
            autoComplete="on"
          />

          <Input label="E-mail" type="email" id="email" name="email" placeholder="Insira seu e-mail aqui"
            autoComplete="on"
          />

          <Select label="Assunto" id="subject" name="subject" placeholder="Escolha o assunto"></Select>

          <Input label="Mensagem" id="message" name="message" placeholder="Escreva sua mensagem"
            autoComplete="on"
          />

          <Button variant="outline-primary">
            Enviar
          </Button>
        </form>
      </div>
    </div>
  );
}