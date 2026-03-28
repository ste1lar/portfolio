type Props = {
  title: string;
  id?: string;
  index?: string;
  className?: string;
};

export default function SectionHeader({ title, id, index, className = 'mb-9 md:mb-16' }: Props) {
  return (
    <header className={`flex items-center justify-between gap-2 border-b border-black pb-7 ${className}`}>
      <h2 id={id}>{title}</h2>
      {index ? <p className="text-xl text-black">{index}</p> : null}
    </header>
  );
}
