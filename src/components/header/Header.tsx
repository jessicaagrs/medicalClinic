'use client';
import Image from 'next/image';
import Link from 'next/link';
import { SearchHeader } from './SearchHeader';
import Button from '../globals/Button';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import MenuUser from '../menu/MenuUser';

export default function Header() {
  const router = useRouter();
  const { data: session } = useSession();

  const handleClickLogin = () => {
    router.push('/login');
  };

  const handleClickAcessClinic = () => {
    router.push('/login?clinic=true');
  };

  return (
    <nav className="full-width-container">
      <header className="py-6 px-4 lg:px-0 flex justify-between items-center">
        <Image src="/icons/Logo.svg" alt="logo" width={100} height={100} />
        <div className="flex items-center gap-6">
          {!session?.user && (
            <>
              <ul className="hidden sm:flex gap-6 text-custom10 text-base">
                <li>
                  <Link href="/about" className="hover:underline">
                    Sobre
                  </Link>
                </li>
                <li>
                  <Link href="/cadastro" className="hover:underline">
                    Cadastre-se
                  </Link>
                </li>
              </ul>
              <SearchHeader />
            </>
          )}
          {session?.user ? (
            <MenuUser />
          ) : (
            <>
              <Button onClick={handleClickLogin}>Login</Button>
              <Button onClick={handleClickAcessClinic} width="w-36">
                Acesso Clínica
              </Button>
            </>
          )}
        </div>
      </header>
    </nav>
  );
}
