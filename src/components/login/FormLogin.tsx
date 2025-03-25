'use client';

import Button from '@/components/globals/Button';
import Input from '@/components/globals/Input';
import { useLoading } from '@/hooks/useLoading';
import { useModal } from '@/hooks/useModal';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function FormLogin({ clinic }: { readonly clinic?: string }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  const { isOpen, componentModalError, openModal } = useModal();
  const { isLoading, renderLoading, stopLoading, componentLoading } =
    useLoading();
  const [isLoadingGoogle, setIsLoadingGoogle] = useState(false);

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmitLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Preencha todos os campos.');
      openModal();
      return;
    }

    renderLoading();

    const result = await signIn('credentials', {
      email,
      password,
      clinic,
      redirect: false,
    });

    if (!result?.ok) {
      setError(result?.error ?? 'Erro ao fazer login.');
      openModal();
      stopLoading();
    } else {
      stopLoading();
      router.push('/dashboard');
    }
  };

  const handleGoogleLogin = async () => {
    setIsLoadingGoogle(true);
    await signIn('google', { redirect: false, callbackUrl: '/dashboard' });
    setIsLoadingGoogle(false);
  };

  return (
    <main className="bg-[url(/background/Background.png)] h-screen flex justify-center">
      <div className="bg-custom30 w-full sm:max-w-[700px] flex flex-col items-center">
        <form
          onSubmit={handleSubmitLogin}
          className="mb-4"
          data-testid="login-form"
        >
          <div className="mt-10 flex flex-col items-center gap-14">
            <Image src="/icons/Logo.svg" alt="Logo" width={140} height={40} />
            <h1 className="text-base sm:text-2xl font-bold text-center text-custom80">
              Faça login em sua conta
            </h1>
          </div>
          <div className="sm:max-w-[500px] max-w-[300px]">
            <div className="flex flex-col gap-2 mt-10">
              <label htmlFor="email">Email</label>
              <Input
                id="email"
                classname="h-12 pl-5 bg-custom70 outline-none rounded-lg"
                name="email"
                type="text"
                placeholder="Insira seu endereço de email"
                value={email}
                onChange={handleChangeEmail}
              />
            </div>
            <div className="flex flex-col gap-2 mt-5">
              <label htmlFor="password">Senha</label>
              <Input
                id="password"
                classname="h-12 pl-5 bg-custom70 outline-none rounded-lg"
                name="password"
                type="password"
                placeholder="Insira sua senha"
                value={password}
                onChange={handleChangePassword}
              />
            </div>
            <div className="flex flex-col items-center gap-2 mt-5">
              <Button width="w-64" ariaLabel="Entrar">
                {isLoading ? componentLoading() : 'Entrar'}
              </Button>
            </div>
          </div>
        </form>
        {!clinic && (
          <Button
            width="w-64"
            onClick={handleGoogleLogin}
            ariaLabel="Entrar com Google"
          >
            {isLoadingGoogle ? (
              'Aguarde...'
            ) : (
              <>
                <Image
                  src="/icons/Google.svg"
                  alt="Google"
                  width={20}
                  height={20}
                />
                <span className="ml-2">Entrar com Google</span>
              </>
            )}
          </Button>
        )}
        <div className="flex flex-col items-center gap-2 mt-5">
          <a href="/resetPassword" className="text-sm text-custom10">
            Esqueceu sua senha?
          </a>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 mt-10">
          <p>
            Ainda não tem conta?{' '}
            <a
              href="/register"
              className="text-custom50 font-bold block sm:inline"
            >
              Faça seu cadastro!
            </a>
          </p>
        </div>
      </div>

      {isOpen && componentModalError('Erro ao efetuar login', error)}
    </main>
  );
}
