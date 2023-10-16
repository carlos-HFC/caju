import Image from "next/image";

interface WitnessProps {}

export function Witness(props: Readonly<WitnessProps>) {
  return (
    <div className="c-witness">
      <div className="c-witness-image">
        <Image
          src="/user-1.png"
          alt=""
          fill
        />
      </div>

      <div className="c-witness-body">
        <Image
          className="c-witness-body-quote"
          src="/quote.svg"
          alt="Aspas"
          width={61}
          height={47}
        />

        <div className="c-witness-body-description">
          Para mim, ter acesso a materiais complementares e a transposição do conteúdo das aulas audiovisuais para escrita, facilitou muito na hora de rever assuntos do curso. Tenho elaborado receitas para o dia a dia sem nenhuma dificuldade e o papo com a nutri foi importante para entender como montar nossas refeições de forma mais saudável.
        </div>
        <div className="c-witness-body-name">
          Júlia P.
        </div>
        <div className="c-witness-body-occupation">
          Jornalista
        </div>
        <div className="c-witness-body-index">
          1/3
        </div>
      </div>
    </div>
  );
}