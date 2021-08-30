import { useAuth0 } from '@auth0/auth0-react';
import { useRouter } from 'next/dist/client/router';
import Header from './Header';

const Layout = ({ children }) => {
  const router = useRouter();
  const { isAuthenticated } = useAuth0();

  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
