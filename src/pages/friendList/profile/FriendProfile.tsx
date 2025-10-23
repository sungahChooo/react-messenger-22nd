// src/pages/Profile.tsx
import profileImage from '@/assets/profile.svg';
import profileChatIcon from '@/assets/profileChat.svg';
import callIcon from '@/assets/callChattingRoom.svg';
import facetimeIcon from '@/assets/facetimeIcon.svg';
import friendsData from '@/data/friend.json';
import { useParams } from 'react-router-dom';
import profile1 from '@/assets/profile1.jpg';
import profile2 from '@/assets/profile2.jpg';
import profile3 from '@/assets/profile3.jpg';
import profile4 from '@/assets/profile4.jpg';
import XButton from './XButton';
import BackgroundLayer from './BackgroundLayer';
import ProfilePageButton from './ProfilePageButton';
import ProfileCard from './ProfileCard';

// 이미지 매핑
const images: Record<string, string> = {
  'profile1.jpg': profile1,
  'profile2.jpg': profile2,
  'profile3.jpg': profile3,
  'profile4.jpg': profile4,
};
const friendButtons = [
  { icon: profileChatIcon, label: '1:1채팅', onClick: () => alert('1:1 채팅 준비중') },
  { icon: callIcon, label: '오디오', onClick: () => alert('오디오 준비중') },
  { icon: facetimeIcon, label: '비디오', onClick: () => alert('비디오 준비중') },
];

export default function FriendProfile() {
  const { id } = useParams<{ id: string }>();
  const friend = friendsData.find((f) => f.id === Number(id));
  if (!friend) {
    return (
      <div className="flex h-screen w-full items-center justify-center text-black">
        친구 정보를 불러올 수 없습니다 😢
      </div>
    );
  }
  return (
    <div className="font-pretendard mx-auto flex min-h-screen w-full max-w-[375px] flex-col place-content-between">
      <BackgroundLayer imageUrl="/friendBg.jpg" opacity={0.7} />
      <XButton />
      <div className="relative z-0 mb-8 flex flex-col items-center">
        <ProfileCard
          name={friend.name}
          number={friend.number || '알 수 없음'}
          profileImage={friend.profileImage ? images[friend.profileImage] : profileImage}
        />
        <ProfilePageButton buttons={friendButtons} />
      </div>
    </div>
  );
}
