type Props = {
  rating: number;
  ariaLabel: string;
  max?: number;
};

export default function RatingDots({ rating, ariaLabel, max = 5 }: Props) {
  return (
    <div className="flex gap-1.5" role="img" aria-label={ariaLabel}>
      {Array.from({ length: max }, (_, index) => {
        const active = index < rating;

        return (
          <span key={index} className="relative inline-flex h-[9px] w-[9px]" aria-hidden="true">
            {active ? <span className="neon-dot-highlight absolute inset-0 z-0 rounded-full" /> : null}
            <span
              className={`relative z-10 h-full w-full rounded-full ${active ? 'bg-white' : 'bg-gray-300'}`}
            />
          </span>
        );
      })}
    </div>
  );
}
