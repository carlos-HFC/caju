import { Open_Sans, Poppins } from 'next/font/google';
import Head from "next/head";

import { Header } from "../Header";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

const open = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--open-sans'
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--poppins'
});

const items = [
  { label: "Sobre nós", href: "/" },
  { label: "Aula experimental", href: "/" },
  { label: "Dúvidas", href: "/" },
  { label: "Contato", href: "/" },
];


export function Layout(props: Readonly<LayoutProps>) {
  return (
    <main className={["c-main", open.variable, poppins.variable].join(' ')}>
      <Header items={items} />

      <Head>
        {props.title && (
          <title>{props?.title}</title>
        )}

        {props.description && (
          <meta name="description" content={props.description} />
        )}
      </Head>

      <div className="c-content">
        {props.children}
      </div>
    </main>
  );
}