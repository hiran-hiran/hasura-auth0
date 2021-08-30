import { useAuth0 } from '@auth0/auth0-react';

const Login = () => {
  const { isAuthenticated, loginWithPopup, logout, user } = useAuth0();

  return (
    <main>
      <h1>Login</h1>
      {isAuthenticated && (
        <div>
          <p>{user?.email}</p>
          <button onClick={() => logout()}>ログアウト</button>
        </div>
      )}
      {!isAuthenticated && (
        <div>
          <p>ログイン</p>
          <button onClick={() => loginWithPopup()}>ログイン</button>
        </div>
      )}
    </main>
  );
};

export default Login;
