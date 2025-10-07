// src/pages/Profile.tsx
import { useParams } from 'react-router-dom';
import xIcon from '@/assets/xIcon.svg';
import profileImage from '@/assets/profile.svg';
import instagramIcon from '@/assets/instagram.svg';
import editIcon from '@/assets/edit.svg';
import profileChatIcon from '@/assets/profileChat.svg';

interface ProfileProps {
  mode: 'my' | 'friend';
}

export default function Profile({ mode }: ProfileProps) {
  const { id } = useParams(); // 친구 id 같은 것 ("/profile/:id"에서 가져옴)

  return (
    <div className="font-pretendard mx-auto flex min-h-screen w-full max-w-[375px] flex-col place-content-between bg-[url(/backgroundImage.jpg)] bg-scroll">
      {/* x버튼 */}
      <div className="flex h-[58px] w-full items-center">
        <img
          src={xIcon}
          className="m-1 ml-[16px] h-[18px] w-[18px] cursor-pointer"
          onClick={() => window.history.back()}
        />
      </div>
      {/* 프로필 박스 + 버튼 영역이 화면 하단에 오도록 정렬 */}
      <div className="mb-8 flex flex-col items-center">
        {/* 프로필 박스 */}
        <div className="mb-4 flex flex-col justify-center gap-4">
          <img
            src={mode === 'my' ? profileImage : profileImage}
            alt="profile"
            className="h-[123px] w-[123px] rounded-full"
          />
          <p className="flex flex-col items-center gap-1">
            <span className="text-2xl font-semibold text-white">{mode === 'my' ? '내 이름' : `친구 ${id}`}</span>
            <span className="font-regular text-white">{mode === 'my' ? '010 1234 5678' : '010 0000 0000'}</span>
          </p>
        </div>

        {/* 버튼 영역 */}
        <div className="flex w-full items-center justify-center gap-2">
          {mode === 'my' ? (
            <>
              <button className="bg-light-yellow flex h-[70px] w-[109px] cursor-pointer flex-col items-center justify-center gap-1 rounded-xl p-2 text-black opacity-70">
                <img src={profileChatIcon} />
                나와의 채팅
              </button>
              <button className="bg-light-yellow flex h-[70px] w-[109px] cursor-pointer flex-col items-center justify-center gap-1 rounded-xl p-2 text-black opacity-70">
                <img src={editIcon} />
                프로필 편집
              </button>
              <button
                className="bg-light-yellow flex h-[70px] w-[109px] cursor-pointer flex-col items-center justify-center gap-1 rounded-xl p-2 text-black opacity-70"
                onClick={() =>
                  window.open('https://www.instagram.com/hij_eong/?igsh=Z3c0a3ZzcDJodHU4&utm_source=qr#', '_blank')
                }
              >
                <img src={instagramIcon} />
                인스타그램
              </button>
            </>
          ) : (
            <>
              <button className="bg-light-yellow flex h-[70px] w-[109px] cursor-pointer flex-col items-center justify-center gap-1 rounded-xl p-2 text-black opacity-70">
                <img src={profileChatIcon} />
                채팅하기
              </button>
              <button
                className="bg-light-yellow flex h-[70px] w-[109px] cursor-pointer flex-col items-center justify-center gap-1 rounded-xl p-2 text-black opacity-70"
                onClick={() =>
                  window.open('https://www.instagram.com/hij_eong/?igsh=Z3c0a3ZzcDJodHU4&utm_source=qr#', '_blank')
                }
              >
                <img src={instagramIcon} />
                인스타그램
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
