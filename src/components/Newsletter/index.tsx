import { FormEvent, useState } from "react";

import { Button } from "../Button";
import { Input } from "../Input";
import { Modal } from "../Modal";

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<string>();
  const [isOpenModalNewsletter, setIsOpenModalNewsletter] = useState(false);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (!email) return;

    setStatus('success');

    setTimeout(() => {
      setIsOpenModalNewsletter(true);
    }, 500);
  }

  function onClose() {
    setEmail('');
    setStatus(undefined);
    setIsOpenModalNewsletter(false);
  }

  return (
    <div className="c-newsletter" aria-labelledby="newsletter-description">
      <div className="c-newsletter-content">
        <div className="c-newsletter-body">
          <div className="c-newsletter-body-title">
            Se increva na nossa newsletter
          </div>

          <div className="c-newsletter-body-description" id="newsletter-description">
            Quer receber nossas atualizações semanalmente? É fácil, só deixar o seu e-mail e nome que nós compartilhamos conteúdos exclusivo sobre veganismo, sustentabilidade e consumo, e nossos próximos cursos.
          </div>
        </div>

        <form
          method="post"
          className="c-newsletter-form"
          aria-label="Insira seu e-mail e receba a newsletter"
          onSubmit={handleSubmit}
        >
          <Input status={status as never} type="email" id="email" name="email" placeholder="Insira seu e-mail aqui"
            autoComplete="on"
            value={email} onChange={e => setEmail(e.target.value)} />
          <Button variant="secondary">
            Receber newsletter
          </Button>
        </form>
      </div>

      <Modal
        isOpen={isOpenModalNewsletter}
        title="Inscrição recebida!"
        onClose={onClose}
        aria-labelledby="newsletter-modal-title"
        aria-describedby="newsletter-modal-description"
      >
        <p>Obrigado pela sua inscrição.</p>
        <p>Estamos aqui para trocar experiências e informação!</p>
      </Modal>
    </div>
  );
}