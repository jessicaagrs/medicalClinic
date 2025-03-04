import Image from 'next/image';

type ButtonInputProps = {
  readonly onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  readonly classname?: string;
  readonly iconSrc?: string;
  readonly iconAlt?: string;
  readonly seeCancelButton?: boolean;
};

export default function ButtonInput({
  onClick,
  classname,
  iconSrc = '/Search.svg',
  iconAlt = 'search',
  seeCancelButton = false,
}: ButtonInputProps) {
  return (
    <button className={classname} onClick={onClick}>
      <Image
        src={seeCancelButton ? '/Cancel.svg' : iconSrc}
        alt={iconAlt}
        width={20}
        height={20}
      />
    </button>
  );
}
