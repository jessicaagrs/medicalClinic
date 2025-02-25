import Button from '@/components/globals/Button';
import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col gap-5 items-center justify-center">
      <h2>Página não encontrada</h2>
      <Image src="/Attention.svg" width={150} height={150} alt="Error" />
      <Button width="w-40">
        <Link href="/">Voltar ao início</Link>
      </Button>
    </div>
  );
}
