// import { ApolloProvider } from "@apollo/client";
// import { useApollo } from "src/apollo";
// import { AuthProvider } from "src/auth/useAuth";
import "../styles/index.css";

import { AppProps } from "next/app";
import Head from "next/head";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <title>Home Sweet Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Component {...pageProps} /></>;
}
