'use client';
import { SessionProvider } from 'next-auth/react';

type DefaultProviderProps = {
  readonly children: React.ReactNode;
};
export default function DefaultProvider({ children }: DefaultProviderProps) {
  return <SessionProvider>{children}</SessionProvider>;
}
