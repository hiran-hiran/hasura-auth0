import '../styles/globals.css';
import { AppProps } from 'next/app';
import { Auth0Provider } from '@auth0/auth0-react';
import { ApolloGraphqlProvider } from '../components/ApolloGraphqlProvider';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Auth0Provider
      domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN}
      clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID}
      redirectUri="http://127.0.0.1:3000/success"
    >
      <ApolloGraphqlProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloGraphqlProvider>
    </Auth0Provider>
  );
}

export default MyApp;
