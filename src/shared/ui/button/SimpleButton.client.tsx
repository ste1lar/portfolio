'use client';

import type { ButtonHTMLAttributes, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

// Client Component: accepts function props (e.g. onClick)
const SimpleButton = ({ children, className = '', ...props }: Props) => {
  return (
    <button
      {...props}
      className={`
        inline-flex items-center justify-center gap-2
        rounded-full border border-gray-200 bg-white
        font-medium text-black
        transition-colors duration-200
        hover:bg-gray-100
        cursor-pointer
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default SimpleButton;
