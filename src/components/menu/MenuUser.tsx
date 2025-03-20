import { signOut } from 'next-auth/react';
import Image from 'next/image';

export default function MenuUser() {
  const handleClick = () => {
    signOut({ callbackUrl: '/', redirect: true });
  };

  return (
    <div data-testid="menu-user">
      <button
        onClick={handleClick}
        className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 hover:bg-gray-300 transition duration-200"
      >
        <Image src="/User.svg" alt="User Menu" width={50} height={50} />
      </button>
    </div>
  );
}
