'use client';

import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';
import { ThemeSwitcher } from '../themeSwitcher';

export const Header = () => {
  const session = useSession();

  return (
    <header className='border-b   from-gray-300 to-gray-600 bg-clip-border'>
      <div className='container mx-auto px-4 py-4 flex items-center justify-between'>
        <div className='text-xl font-semibold '>
          <Link href='/'>MyApp</Link>
        </div>

        <nav className='space-x-4 flex'>
          <Link href='/' className='text-l font-semibold  '>
            Home
          </Link>

          <Link href='/about' className='text-l font-semibold  '>
            About
          </Link>
          <Link href='/contact' className='text-l font-semibold  '>
            Contact
          </Link>
          <Link href='/profile' className='text-l font-semibold '>
            Profile
          </Link>
          {session?.data ? (
            <button
              onClick={() => signOut({ callbackUrl: '/' })}
              className='text-l font-semibold  '
            >
              Sign Out
            </button>
          ) : (
            <Link href='/signin' className='text-l font-semibold  '>
              Sign In
            </Link>
          )}
          <ThemeSwitcher />
        </nav>
      </div>
    </header>
  );
};
