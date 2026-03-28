import Image from 'next/image';
import RatingDots from '@/shared/ui/RatingDots';
import type { SkillItem } from '@/shared/types/home';

type Props = {
  skill: SkillItem;
  ratingAriaLabel: string;
};

export default function SkillCard({ skill, ratingAriaLabel }: Props) {
  return (
    <li className="flex flex-col items-center justify-between gap-5 rounded-lg border border-softGray p-4 sm:gap-10 xl:p-6">
      <div className="flex flex-col items-center gap-5">
        <Image src={skill.icon} alt={skill.name} width={70} height={70} />
        <p className="font-normal text-black">{skill.name}</p>
      </div>

      <RatingDots rating={skill.rating} ariaLabel={ratingAriaLabel} />
    </li>
  );
}
