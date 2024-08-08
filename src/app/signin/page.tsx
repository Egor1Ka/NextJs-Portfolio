import { GithubAuthButton } from '@/components/githubAuthButton';
import { GoogleAuthButton } from '@/components/googleAuthButton';
import Image from 'next/image';

const Signin = () => {
  return (
    <div className='flex min-h-screen'>
      <div className='relative w-1/2 bg-beige flex items-center justify-center'>
        <div className='absolute inset-0'>
          <Image
            src='/images/skeletonAuth.png'
            alt='Skeleton'
            layout='fill'
            objectFit='cover'
            className='w-full h-full'
          />
        </div>
        <div className='absolute bottom-8 text-center w-full px-4'>
          <h1 className='text-2xl mt-4 text-pink-600	'>
            Turn your ideas into reality.
          </h1>
          <p className='mt-2 text-pink-600	'>
            Start for free and get attractive offers from the community
          </p>
        </div>
      </div>
      <div className='w-1/2 bg-white flex flex-col items-center justify-center p-8'>
        <h2 className='text-3xl mb-6'>Login to your Account</h2>
        <div className='flex gap-4 mb-6 flex-col w-2/3'>
          <GoogleAuthButton />
          <GithubAuthButton />
        </div>
        <p className='mb-4'>or Sign in with Email</p>
        <form className='w-2/3'>
          <div className='mb-4'>
            <input
              type='email'
              placeholder='Еще не реализовано'
              disabled
              className='w-full p-2 border rounded'
            />
          </div>
          <div className='mb-4'>
            <input
              type='password'
              disabled
              placeholder='Еще не реализовано'
              className='w-full p-2 border rounded'
            />
          </div>
          <div className='flex justify-between items-center mb-6'>
            <label className='flex items-center'>
              <input type='checkbox' className='mr-2' />
              Remember Me
            </label>
            <a href='#' className='text-purple-600'>
              Forgot Password?
            </a>
          </div>
          <button
            disabled
            className='bg-purple-600 text-white py-2 px-4 rounded w-full'
          >
            Login
          </button>
        </form>
        <p className='mt-4'>
          Not Registered Yet?{' '}
          <a href='#' className='text-purple-600'>
            Create an account
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signin;
