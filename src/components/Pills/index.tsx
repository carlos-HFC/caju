import Image from "next/image";

interface PillsProps {
  active?: boolean;
  name: string;
  occupation: string;
  avatar: string;
  onClick?(): void;
}

export function Pills(props: Readonly<PillsProps>) {
  return (
    <div className={["c-pills", props.active ? 'active' : ''].join(' ')} onClick={props.onClick}>
      <div className="c-pills-image">
        <Image
          src={props.avatar}
          alt={props.name}
          width={78}
          height={78}
        />
      </div>

      <div className="c-pills-body">
        <div className="c-pills-body-name">
          {props.name}
        </div>
        <div className="c-pills-body-occupation">
          {props.occupation}
        </div>
      </div>
    </div>
  );
}