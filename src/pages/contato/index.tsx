import Image from "next/image";
import Link from "next/link";
import { ChangeEvent, FormEvent, useCallback, useState } from "react";

import { Button } from "@/components/Button";
import { Checkbox } from "@/components/Checkbox";
import { Icon } from "@/components/Icon";
import { Input } from "@/components/Input";
import { Modal } from "@/components/Modal";
import { Select } from "@/components/Select";
import { Textarea } from "@/components/Textarea";

import { SUBJECT_OPTIONS } from "@/constants";

const INITIAL_STATE = {
  name: "",
  email: "",
  subject: "",
  message: "",
  accept: false,
};

export default function Contato() {
  const [data, setData] = useState(INITIAL_STATE);
  const [isOpenModalSuccess, setIsOpenModalSuccess] = useState(false);

  const handleSubmit = useCallback(
    (event: FormEvent) => {
      event.preventDefault();

      const values = Object.values(data);

      for (const item of values) {
        if (typeof item === 'string' && !item.trim()) return;
      }

      setTimeout(() => {
        setIsOpenModalSuccess(true);
      }, 500);
    },
    [data],
  );

  const onChange = useCallback(
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      if (event.target.name === 'accept') {
        return setData(prev => ({
          ...prev,
          [event.target.name]: !data.accept
        }));
      }

      setData(prev => ({
        ...prev,
        [event.target.name]: event.target.value
      }));
    },
    [data],
  );

  const onClose = useCallback(
    () => {
      setData(INITIAL_STATE);
      setIsOpenModalSuccess(false);
    },
    [],
  );

  return (
    <div className="contact">
      <div className="contact-body">
        <Image
          src="/nuts.png"
          alt="Nozes"
          width={839}
          height={839}
          className="contact-image"
        />

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
              Se você ainda tem dúvidas ou quer conversar conosco, nos envie um e-mail para <Link href="mailto:contato@comcaju.com"><strong>contato@comcaju.com</strong></Link>, ou preencha o formulário a seguir.
            </p>
          </div>
        </section>

        <form
          className="contact-form"
          method="post"
          aria-label="Insira as suas informações para entrar em contato conosco"
          onSubmit={handleSubmit}
        >
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

          <Select label="Assunto" id="subject" name="subject" placeholder="Escolha o assunto"
            value={data.subject}
            onChange={onChange}
          >
            {SUBJECT_OPTIONS.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </Select>

          <Textarea label="Mensagem" id="message" name="message" placeholder="Escreva sua mensagem"
            autoComplete="on"
            value={data.message}
            onChange={onChange}
          />

          <Checkbox label="Aceito receber novidades do Com Cajú via e-mail" id="accept" name="accept"
            checked={data.accept}
            onChange={onChange}
          />

          <Button variant="outline-primary">
            Enviar
          </Button>
        </form>
      </div>

      <Modal
        isOpen={isOpenModalSuccess}
        title="Pronto!"
        onClose={onClose}
        aria-labelledby="contact-modal-title"
        aria-aria-describedby="contact-modal-description"
      >
        <p>Recebemos sua mensagem!</p>
        <p>Iremos respondê-la em até 48 horas.</p>
      </Modal>
    </div>
  );
}