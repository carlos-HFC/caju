import Image from "next/image";

interface WitnessProps {
  image: string;
  name: string;
  description: string;
  occupation: string;
  index: number;
  total: number;
}

export function Witness(props: Readonly<WitnessProps>) {
  return (
    <div className="c-witness">
      <div className="c-witness-image">
        <Image
          src={props.image}
          alt={props.name}
          fill
          loading="lazy"
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
          {props.description}
        </div>
        <div className="c-witness-body-name">
          {props.name}
        </div>
        <div className="c-witness-body-occupation">
          {props.occupation}
        </div>
        <div className="c-witness-body-index">
          {props.index}/{props.total}
        </div>
      </div>
    </div>
  );
}