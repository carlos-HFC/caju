import Link from "next/link";

import { Icon } from "../Icon";

export function BackLink() {
  return (
    <Link href="/" className="c-backlink">
      <Icon name="arrow-left" />
      Voltar
    </Link>
  );
}