import { AppProps } from "next/app";

import "@/styles/main.min.css";

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;