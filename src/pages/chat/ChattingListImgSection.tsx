import type { User } from '@/types/user';
import { profileDefaultImage, profileImages } from '@/data/profileImages';

interface ChattingListImgSectionProps {
  participants: User[];
}

export default function ChattingListImgSection({ participants }: ChattingListImgSectionProps) {
  const displayed = participants.slice(0, 3); // 최대 3명 표시

  // 부모 div 클래스 결정
  let containerClass = 'relative h-14 w-14 overflow-hidden z-0';
  if (displayed.length === 2) {
    containerClass += ' flex items-center -space-x-3';
  }

  return (
    <div className={containerClass}>
      {displayed.map((p, index) => {
        let positionClass = '';

        if (displayed.length === 3) {
          // 3명 삼각형 배치
          const positions = [
            'absolute top-0 left-1/2 -translate-x-1/2 z-30', // 위 중앙
            'absolute bottom-0 left-0 z-20', // 왼쪽 아래
            'absolute bottom-0 right-0 z-10', // 오른쪽 아래
          ];
          positionClass = positions[index];
        }

        return (
          <img
            key={p.id}
            src={profileImages[p.id] || profileDefaultImage}
            alt={p.name}
            className={`rounded-full border-2 border-white ${
              displayed.length === 1 ? 'h-9 w-9' : 'h-8 w-8'
            } ${positionClass}`}
          />
        );
      })}
    </div>
  );
}
