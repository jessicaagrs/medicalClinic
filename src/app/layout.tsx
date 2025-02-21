import type { Metadata } from 'next';
import { Public_Sans } from 'next/font/google';
import './globals.css';

const publicSans = Public_Sans({
  variable: '--font-public-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Clínica Médica Dev',
  description: 'Agendamento de consulta e cadastro de profissionais médicos',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${publicSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
