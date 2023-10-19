import Image from "next/image";
import Link from "next/link";

import { Button } from "../Button";
import { Icon } from "../Icon";

export function Banner() {
  return (
    <section className="c-banner">
      <div className="c-banner-body">
        <div className="c-banner-body-category">
          Curso
        </div>

        <div className="c-banner-body-title">
          Veganismo Criativo: <br /> Construindo autonomia culinária
        </div>

        <div className="c-banner-body-description">
          Vem com a gente aprender e produzir receitas deliciosas, com autonomia e praticidade.
        </div>

        <div className="c-banner-body-link">
          <Button variant="secondary" href="#student">
            Quero ser aluno(a)
          </Button>
        </div>

        <Image
          src="/banner.png"
          width={1240}
          height={1551}
          alt="Imagem de banner"
          className="c-banner-body-image"
          priority
        />
      </div>

      <div className="c-banner-social">
        <Link href="/">
          <Icon name="instagram" />
        </Link>
        <Link href="/">
          <Icon name="youtube" />
        </Link>
        <Link href="/">
          <Icon name="mail" />
        </Link>
      </div>
    </section>
  );
}