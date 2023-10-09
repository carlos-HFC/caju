import { Open_Sans, Poppins } from 'next/font/google';
import Head from "next/head";

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

export function Layout(props: Readonly<LayoutProps>) {
  return (
    <main className={["c-main", open.variable, poppins.variable].join(' ')}>
      <Head>
        {props.title && (
          <title>{props?.title}</title>
        )}

        {props.description && (
          <meta name="description" content={props.description} />
        )}
      </Head>

      {props.children}
    </main>
  );
}