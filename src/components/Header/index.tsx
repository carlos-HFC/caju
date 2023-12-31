import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";

import { Icon } from "../Icon";

type Item = {
  label: string;
  href: string;
};

interface HeaderProps {
  items: Item[];
}

export function Header(props: Readonly<HeaderProps>) {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  useEffect(() => {
    closeMenu();
  }, [router.asPath]);

  useEffect(() => {
    document.addEventListener('click', closeMenu);
    return () => document.removeEventListener('click', closeMenu);
  }, []);

  const closeMenu = useCallback(() => setIsOpen(false), [isOpen]);

  return (
    <header className="c-header" onClick={closeMenu}>
      <div className="c-header-content">
        <div className="c-header-toggler">
          <Icon
            name="menu"
            aria-label="Alterar navegação"
            aria-expanded={isOpen ? 'true' : "false"}
            aria-controls="navbarContent"
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(prev => !prev);
            }}
          />
        </div>
        <div className="c-header-brand">
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
        <nav className={["c-header-navbar", isOpen ? 'open' : ''].join(" ")} id="navbarContent" onClick={e => e.stopPropagation()}>
          <ul className="nav">
            <li className="nav-item nav-close">
              <Icon name="close" onClick={closeMenu} />
            </li>
            {props.items?.map((item, i) => (
              <li className="nav-item" key={`${item}-${String(i).padStart(2, '0')}`}>
                <Link href={item.href} className="nav-link">
                  {item.label}
                  <Icon name="chevron-right" />
                </Link>
              </li>
            ))}
          </ul>
          <div className="special">
            <Link href="/#student" className="special-link">
              Quero ser aluno(a)
              <Icon name="chevron-right" />
            </Link>
          </div>
          <div className="social">
            <Link href="/" className="nav-link">
              <Icon name="instagram" />
            </Link>
            <Link href="/" className="nav-link">
              <Icon name="facebook" />
            </Link>
            <Link href="/" className="nav-link">
              <Icon name="mail" />
            </Link>
          </div>
        </nav>
        <div className="c-header-bg" />
      </div>
    </header>
  );
}