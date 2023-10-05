import { AppProps } from "next/app";

import { Layout } from "@/components/Layout";

import "@/styles/main.min.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <Layout title="Projeto Com Cajú">
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;