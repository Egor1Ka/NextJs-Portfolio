'use client';

import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

export const Navigation = () => {
  const session = useSession();

  return (
    <>
      <Link href='/profile'>Profile</Link>
      {session?.data ? (
        <Link href='#' onClick={() => signOut({ callbackUrl: '/' })}>
          Sign Out
        </Link>
      ) : (
        <Link href='/signin'>SignIn</Link>
      )}
    </>
  );
};
