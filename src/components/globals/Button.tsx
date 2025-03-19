import React, { forwardRef } from 'react';

type ButtonProps = Readonly<{
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  width?: string;
  height?: string;
  color?: string;
  backgroundColor?: string;
  id?: string;
  ariaLabel?: string;
}>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { children, onClick, width, height, color, backgroundColor, id, ariaLabel },
    ref
  ) => {
    return (
      <button
        aria-label={ariaLabel}
        ref={ref}
        id={id}
        className={`${width ?? 'w-24'} ${height ?? 'h-10'} ${backgroundColor ?? 'bg-custom10'} ${color ?? 'text-custom30'} flex justify-center items-center rounded-lg hover:bg-custom20 transition-colors duration-300`}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
