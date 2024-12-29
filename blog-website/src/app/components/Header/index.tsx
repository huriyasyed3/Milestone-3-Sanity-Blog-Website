import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
   <header className='flex justify-between px-10 py-5 md:px-24 max-w-[1000px] mx-auto'>
    <Link  href={'/'} className='text-2xl font-bold underline'>
    Sanity Blog</Link>
    <nav>
        <ul className='flex gap-4'>
            <li className='hover:underline cursor-pointer font-semibold'>About</li>
            <li className='hover:underline cursor-pointer font-semibold'>Contact</li>
        </ul>
    </nav>
   </header>
  );
};

export default Header;