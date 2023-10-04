import type { Metadata } from 'next';
import { Open_Sans, Poppins } from 'next/font/google';

import "@/styles/main.min.css";

const open = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--open-sans'
});
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--poppins'
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: 'Com Cajú',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi voluptate repellendus maxime dignissimos ab eos esse ratione, veritatis assumenda vitae, sequi optio veniam quos cum voluptas eaque eius, pariatur nam.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Com Cajú',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi voluptate repellendus maxime dignissimos ab eos esse ratione, veritatis assumenda vitae, sequi optio veniam quos cum voluptas eaque eius, pariatur nam.',
    images: '/next.svg',
  },
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR">
      <body className={[open.variable, poppins.variable].join(" ")}>{children}</body>
    </html>
  );
}
