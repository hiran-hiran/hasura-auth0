import Link from 'next/link';
import { VFC } from 'react';

const Header: VFC = () => {
  return (
    <header className="bg-gray-300">
      <nav className="flex items-center">
        <Link href="/">
          <a className="p-3">Home</a>
        </Link>
        <Link href="/login">
          <a className="p-3">Login</a>
        </Link>
        <Link href="/success">
          <a className="p-3">Success</a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
