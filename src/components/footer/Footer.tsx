import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="mt-10 h-28 bg-custom10 text-custom30 flex flex-col items-center justify-center gap-4">
      <div className="flex gap-4 items-center">
        <a href="https://www.facebook.com/" target="_blank">
          <Image src="/Facebook.svg" alt="Facebook" width={12} height={12} />
        </a>
        <a href="https://www.whatsapp.com/" target="_blank">
          <Image src="/Whatsapp.svg" alt="WhatsApp" width={20} height={20} />
        </a>
        <a href="https://www.google.com/" target="_blank">
          <Image src="/Google.svg" alt="Google" width={20} height={20} />
        </a>
        <a href="https://www.instagram.com/" target="_blank">
          <Image src="/Instagram.svg" alt="Instagram" width={20} height={20} />
        </a>
      </div>
      <p className="sm:text-sm text-xs px-3 sm:px-0">
        © 2025 Desenvolvido por{' '}
        <a href="https://github.com/jessicaagrs" target="_blank">
          @jessagrs
        </a>{' '}
        - Todos os direitos reservados
      </p>
    </footer>
  );
}
