import Link from 'next/link';
import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className='flex gap-x-12'>
        <Link href='/'>Home</Link>
        <Link href='/sub'>Sub</Link>
      </div>
      <div className='flex-grow flex flex-col border-0 border-indigo-500 '>{children}</div>
    </div>
  );
};

export default Layout;
