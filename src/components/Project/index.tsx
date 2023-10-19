import Image from "next/image";
import Link from "next/link";

import { Icon } from "../Icon";

interface ProjectProps {
  image: string;
  title: string;
  body: string;
  link: string
}

export function Project(props: Readonly<ProjectProps>) {
  return (
    <div className="c-project">
      <div className="c-project-image">
        <Image
          src={props.image}
          width={130}
          height={130}
          alt={props.title}
        />
      </div>

      <div className="c-project-title">
        {props.title}
      </div>

      <div className="c-project-body">
        {props.body}
      </div>

      <Link href={props.link} target="_blank" className="c-project-link">
        Conhecer projeto
        <Icon name="arrow-right" />
      </Link>
    </div>
  );
}