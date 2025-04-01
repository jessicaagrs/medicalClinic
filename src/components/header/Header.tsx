'use client';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import Button from '../globals/Button';
import MenuUser from '../menu/MenuUser';
import { SearchHeader } from './SearchHeader';

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const { data: session } = useSession();
  const isAboutPage = pathname === '/about';

  const handleClickLogin = () => {
    router.push('/login');
  };

  const handleClickAcessClinic = () => {
    router.push('/login?clinic=true');
  };

  return (
    <nav className="full-width-container">
      <header className="py-6 px-4 lg:px-0 flex flex-col lg:flex-row justify-between items-center">
        <Image src="/icons/Logo.svg" alt="logo" width={100} height={100} />
        <div className="flex flex-col lg:flex-row items-center gap-6">
          {!session?.user && (
            <>
              <ul className="flex gap-6 mt-4 lg:mt-0 text-custom10 text-base">
                <li>
                  <Link
                    href={isAboutPage ? '/' : '/about'}
                    className="hover:underline"
                  >
                    {isAboutPage ? 'Início' : 'Sobre'}
                  </Link>
                </li>
                <li>
                  <Link href="/register" className="hover:underline">
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
            <div className="flex gap-4">
              <Button onClick={handleClickLogin}>Login</Button>
              <Button onClick={handleClickAcessClinic} width="w-36">
                Acesso Clínica
              </Button>
            </div>
          )}
        </div>
      </header>
    </nav>
  );
}
