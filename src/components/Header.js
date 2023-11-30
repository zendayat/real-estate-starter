import React from 'react';

import { Link } from 'react-router-dom';
import Logo from '../assets/img/logo.svg';

const Header = () => {
  return (
    <header className='flex justify-between px-6 py-8 mb-2 place-items-center max-h-[640px]'>
      <Link to='/'>
        <img src={Logo}/>
      </Link>
      <div className='flex gap-5 place-items-center'>
        <Link to='' className='bg-violet-900 px-4 py-2 border rounded-lg hover:border-black hover:bg-transparent duration-150'>Log in</Link>
        <Link to='' className='bg-transparent px-4 py-2 border rounded-full hover:border-violet-900 hover:bg-transparent duration-150'>Sign up</Link>
      </div>
    </header>
  );
};

export default Header;
