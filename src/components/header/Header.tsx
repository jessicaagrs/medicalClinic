'use client';
import Image from 'next/image';
import Link from 'next/link';
import { SearchHeader } from './SearchHeader';
import Button from '../globals/Button';

export default function Header() {
  return (
    <nav className="full-width-container">
      <header className="py-6 flex justify-between items-center">
        <Image src="/Logo.svg" alt="logo" width={100} height={100} />
        <div className="flex items-center gap-6">
          <ul className="flex gap-6 text-custom10 text-base">
            <li>
              <Link href="/sobre" className="hover:underline">
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
          <Button onClick={() => console.log('clicked')}>Login</Button>
        </div>
      </header>
    </nav>
  );
}
