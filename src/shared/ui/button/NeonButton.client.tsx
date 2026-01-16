'use client';

import type { ButtonHTMLAttributes, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

// Client Component: accepts function props (e.g. onClick)
const NeonButton = ({ children, className = '', ...props }: Props) => {
  return (
    <button
      {...props}
      className={`
        relative inline-flex items-center justify-center
        cursor-pointer group
        px-0 py-0 border-none bg-transparent
        ${className}
      `}
    >
      {/* 네온 하이라이트 (버튼 뒤 배경) */}
      <span
        className="
          neon-highlight
        "
      />

      {/* 실제 버튼 바디 */}
      <span
        className="
          relative z-10 inline-flex items-center justify-center gap-2
          rounded-full
          bg-white px-4 py-2
          text-xs sm:text-sm md:text-base font-medium text-black
        "
      >
        {children}
      </span>
    </button>
  );
};

export default NeonButton;
