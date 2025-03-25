import type { Metadata } from 'next';
import { Public_Sans } from 'next/font/google';
import '../styles/globals.css';
import DefaultProvider from '@/contexts/DefaultProvider';

const publicSans = Public_Sans({
  variable: '--font-public-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Clínica Médica Voll',
  description: 'Agendamento de consulta e cadastro de profissionais médicos',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="shortcut icon" href="/icons/Logo.svg" type="image/x-icon" />
      </head>
      <body className={`${publicSans.variable} antialiased`}>
        <DefaultProvider>{children}</DefaultProvider>
      </body>
    </html>
  );
}
