// src/pages/Profile.tsx
import xIcon from '@/assets/xIcon.svg';
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

// 이미지 매핑
const images: Record<string, string> = {
  'profile1.jpg': profile1,
  'profile2.jpg': profile2,
  'profile3.jpg': profile3,
  'profile4.jpg': profile4,
};

function FriendProfile() {
  const { id } = useParams<{ id: string }>();
  const friend = friendsData.find((f) => f.id === Number(id));
  if (!friend) {
    return (
      <div className="flex h-screen w-full items-center justify-center text-black">
        친구 정보를 불러올 수 없습니다 😢
      </div>
    );
  }
  const profileSrc = friend.profileImage ? images[friend.profileImage] : profileImage;
  return (
    <div className="font-pretendard mx-auto flex min-h-screen w-full max-w-[375px] flex-col place-content-between">
      {/*배경 레이어 */}
      <div className="absolute inset-0 z-0 mx-auto flex min-h-screen w-full max-w-[375px] bg-[url('/friendBg.jpg')] bg-cover opacity-70"></div>
      {/* x버튼 */}
      <div className="relative z-0 mt-10 flex h-[58px] w-full items-center">
        <img
          src={xIcon}
          className="m-1 ml-[16px] h-[18px] w-[18px] cursor-pointer"
          onClick={() => window.history.back()}
        />
      </div>
      {/* 프로필 박스 + 버튼 영역이 화면 하단에 오도록 정렬 */}
      <div className="relative z-0 mb-8 flex flex-col items-center">
        {/* 프로필 박스 */}
        <div className="mb-4 flex flex-col justify-center gap-4">
          <img src={profileSrc} alt="profile" className="h-[123px] w-[123px] rounded-full" />
          <p className="flex flex-col items-center gap-1">
            <span className="text-2xl font-semibold text-white">{friend.name}</span>
            <span className="text-base font-normal text-white">{friend.number}</span>
          </p>
        </div>

        {/* 버튼 영역 */}
        <div className="flex w-full items-center justify-center gap-2">
          <button className="bg-light-yellow flex h-[70px] w-[109px] cursor-pointer flex-col items-center justify-center gap-1 rounded-xl p-2 text-[14px] font-normal text-black opacity-70">
            <img src={profileChatIcon} />
            1:1채팅
          </button>
          <button className="bg-light-yellow flex h-[70px] w-[109px] cursor-pointer flex-col items-center justify-center gap-1 rounded-xl p-2 text-[14px] font-normal text-black opacity-70">
            <img src={callIcon} />
            오디오
          </button>
          <button className="bg-light-yellow flex h-[70px] w-[109px] cursor-pointer flex-col items-center justify-center gap-1 rounded-xl p-2 text-[14px] font-normal text-black opacity-70">
            <img src={facetimeIcon} />
            비디오
          </button>
        </div>
      </div>
    </div>
  );
}
export default FriendProfile;
