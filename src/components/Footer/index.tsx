import Image from "next/image";
import Link from "next/link";

import { MENU_ITEMS } from "@/constants";
import { Icon } from "../Icon";

interface FooterProps {}

export function Footer(props: Readonly<FooterProps>) {
  return (
    <footer className="c-footer">
      <div className="c-footer-content">
        <div className="c-footer-brand">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Logo Com Cajú"
              width={93}
              height={51}
              priority
            />
          </Link>
        </div>

        <nav className="c-footer-navbar">
          <ul className="nav">
            {MENU_ITEMS.map((item, i) => (
              <li className="nav-item" key={String(i).padStart(2, '0')}>
                <Link className="nav-link" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="nav-item">
              <Link className="nav-link" href="/">
                Quero ser aluno(a)
              </Link>
            </li>
          </ul>
        </nav>

        <div className="c-footer-social">
          <Link href="/" className="c-footer-social-link">
            <Icon name="instagram" />
          </Link>
          <Link href="/" className="c-footer-social-link">
            <Icon name="youtube" />
          </Link>
          <Link href="/" className="c-footer-social-link">
            <Icon name="mail" />
          </Link>
        </div>
      </div>
    </footer>
  );
}