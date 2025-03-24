import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-10 h-28 bg-custom10 text-custom30 flex flex-col items-center justify-center gap-4">
      <div className="flex gap-4 items-center">
        <Link href="https://www.facebook.com/" target="_blank">
          <Image src="/icons/Facebook.svg" alt="Facebook" width={12} height={12} />
        </Link>
        <Link href="https://www.whatsapp.com/" target="_blank">
          <Image src="/icons/Whatsapp.svg" alt="WhatsApp" width={20} height={20} />
        </Link>
        <Link href="https://www.google.com/" target="_blank">
          <Image src="/icons/Google.svg" alt="Google" width={20} height={20} />
        </Link>
        <Link href="https://www.instagram.com/" target="_blank">
          <Image src="/icons/Instagram.svg" alt="Instagram" width={20} height={20} />
        </Link>
      </div>
      <p className="sm:text-sm text-xs px-3 sm:px-0">
        © 2025 Desenvolvido por{' '}
        <Link href="https://github.com/jessicaagrs" target="_blank">
          @jessagrs
        </Link>{' '}
        - Todos os direitos reservados
      </p>
    </footer>
  );
}
