import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import config from "../next.config";
import Head from 'next/head';


const App = ({ Component, pageProps }) => {
  const basePath = config.basePath ? config.basePath : "";

  return (
    <>
      <Head>
        <link rel="icon" href={`${basePath}/favicon.ico`} />
      </Head>

      <ThemeProvider
        defaultTheme="dark"
        enableSystem={false}
      >
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
