import React, { forwardRef } from 'react';

type ButtonProps = {
  readonly children: React.ReactNode;
  readonly onClick?: () => void;
  readonly width?: string;
  readonly height?: string;
  readonly color?: string;
  readonly backgroundColor?: string;
  readonly id?: string;
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, onClick, width, height, color, backgroundColor, id }, ref) => {
    return (
      <button
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
