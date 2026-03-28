type Props = {
  filled?: boolean;
  className?: string;
};

export default function TimelineDot({ filled = false, className = '' }: Props) {
  return (
    <div
      aria-hidden="true"
      className={`no-print flex h-3.5 w-3.5 items-center justify-center rounded-full border border-black bg-white ${className}`}
    >
      {filled ? <div className="h-1.5 w-1.5 rounded-full bg-black" /> : null}
    </div>
  );
}
