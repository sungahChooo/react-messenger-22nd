import type { User } from '@/types/user';
import { profileDefaultImage, profileImages } from '@/data/profileImages';

interface ChattingListImgSectionProps {
  participants: User[];
}

export default function ChattingListImgSection({ participants }: ChattingListImgSectionProps) {
  return (
    <div
      className={`grid ${
        participants.length === 1
          ? 'grid-cols-1 grid-rows-1'
          : participants.length === 2
            ? 'grid-cols-2 grid-rows-1'
            : participants.length === 3 || participants.length === 4
              ? 'grid-cols-2 grid-rows-2'
              : 'grid-cols-3 grid-rows-3'
      } overflow-hidden`}
    >
      {participants.slice(0, 9).map((p) => (
        <img
          key={p.id}
          src={profileImages[p.id] || profileDefaultImage}
          alt={p.name}
          className="aspect-square w-full rounded-full object-cover"
        />
      ))}
    </div>
  );
}
