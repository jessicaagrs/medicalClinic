type ButtonProps = {
  readonly children: React.ReactNode;
  readonly onClick?: () => void;
  readonly width?: string;
  readonly height?: string;
  readonly color?: string;
  readonly backgroundColor?: string;
};

export default function Button({
  children,
  onClick,
  width,
  height,
  color,
  backgroundColor,
}: ButtonProps) {
  return (
    <button
      className={`${width ?? 'w-24'} ${height ?? 'h-10'} ${backgroundColor ?? 'bg-custom10'} ${color ?? 'text-custom30'} flex justify-center items-center rounded-lg hover:bg-custom20 transition-colors duration-300`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
