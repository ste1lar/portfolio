import Image from 'next/image';
import { Link } from '@/i18n/navigation';

type Props = {
  variant?: 'header' | 'footer';
  className?: string;
};

export default function Logo({ variant = 'header', className = '' }: Props) {
  const sizeClass =
    variant === 'header'
      ? 'w-24 sm:w-28 md:w-32'
      : 'w-20 sm:w-22 md:w-24';

  return (
    <Link href="/" className={`inline-flex items-center ${sizeClass} ${className}`}>
      <Image
        src="/images/logo/logo.png"
        alt="logo"
        width={512}
        height={160}
        className="h-auto w-full"
        priority
      />
    </Link>
  );
}
