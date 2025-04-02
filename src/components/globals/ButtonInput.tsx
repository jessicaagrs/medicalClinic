import Image from 'next/image';

type ButtonInputProps = Readonly<{
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  classname?: string;
  iconSrc?: string;
  iconAlt?: string;
  seeCancelButton?: boolean;
}>;

export default function ButtonInput({
  onClick,
  classname,
  iconSrc = '/icons/Search.svg',
  iconAlt = 'search',
  seeCancelButton = false,
}: ButtonInputProps) {
  return (
    <button className={classname} onClick={onClick}>
      <Image
        src={seeCancelButton ? '/icons/Cancel.svg' : iconSrc}
        alt={iconAlt}
        width={20}
        height={20}
        aria-label={seeCancelButton ? 'cancel' : 'search'}
      />
    </button>
  );
}
