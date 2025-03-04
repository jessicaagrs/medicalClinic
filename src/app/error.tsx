'use client';

import Button from '@/components/globals/Button';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

export default function ErrorBoundary({
  error,
  reset,
}: {
  readonly error: Error & { digest?: string };
  readonly reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="h-screen flex flex-col gap-5 items-center justify-center">
      <h2>Ops... ocorreu um erro.</h2>
      <p>{`Detalhes: ${error.message}`}</p>
      <Image src="/Error.svg" width={150} height={150} alt="Error" />
      <Button onClick={() => reset()} width="w-40">
        Tentar novamente
      </Button>
      <Button width="w-40">
        <Link href="/">Voltar ao início</Link>
      </Button>
    </div>
  );
}
