import React, { forwardRef } from 'react';

type ButtonProps = Readonly<{
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  id?: string;
  ariaLabel?: string;
  type?: 'button' | 'submit' | 'reset';
}>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, onClick, className, id, ariaLabel, ...rest }, ref) => {
    return (
      <button
        aria-label={ariaLabel}
        ref={ref}
        id={id}
        className={` w-24 h-10 bg-custom10  text-custom30 flex justify-center items-center rounded-lg hover:bg-custom20 transition-colors duration-300 ${className}`}
        onClick={onClick}
        {...rest}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
