import { getServerSession } from 'next-auth';
import { authConfig } from '../../../configs/auth';
import Image from 'next/image';

const Profile = async () => {
  const session = await getServerSession(authConfig);

  console.log('session', session);

  return (
    <div>
      <h1>Profile</h1>
      {session?.user?.image && (
        <Image
          src={session.user.image}
          alt='userPhoto'
          sizes='100'
          width={100}
          height={100}
        />
      )}
      <h2>{session?.user?.email}</h2>
      <h2>{session?.user?.name}</h2>
    </div>
  );
};

export default Profile;
