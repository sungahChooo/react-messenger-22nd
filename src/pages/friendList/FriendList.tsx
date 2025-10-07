import profile from '@/assets/profile.svg';
import findIcon from '@/assets/search.svg';
import addFriendIcon from '@/assets/addFriend.svg';
import Header from '@/components/Header';
import { useNavigate } from 'react-router-dom';

function FriendList() {
  const navigate = useNavigate();
  return (
    <div className="items font-pretendard mx-auto min-h-screen w-full max-w-[375px] bg-white pb-[65px]">
      {/* 상단 헤더 */}
      <Header
        title="친구"
        right={
          <div className="flex cursor-pointer gap-4">
            <button onClick={() => alert('준비중입니다.')}>
              <img src={findIcon} alt="search" />
            </button>
            <button>
              <img src={addFriendIcon} alt="camera" />
            </button>
          </div>
        }
      />

      {/* 내 프로필 */}
      <section
        className="my-4 flex cursor-pointer items-center gap-4 px-4"
        onClick={() => {
          navigate('/profile/me');
        }}
      >
        <img src={profile} alt="프로필 이미지" className="h-[65px] w-[65px]" />
        <div>
          <div className="font-bold">내이름</div>
          <div className="text-sm text-gray-500">상태메시지 있는 경우입니다.</div>
        </div>
      </section>
      {/* 친구 리스트 */}
      <ul className="mb-4 flex flex-col gap-4 px-4">
        <p className="flex gap-3 border-b border-gray-300 px-4 py-3">ㄱ</p>
        {[1, 2, 3, 4, 5, 6, 7].map((i) => (
          <li key={i} className="flex cursor-pointer items-center gap-4 px-4" onClick={() => navigate(`/profile/${i}`)}>
            <img src={profile} className="h-[46px] w-[46px]" />
            <div>
              <div className="font-bold">친구이름</div>
              <div className="text-sm text-gray-500">상태메시지 있는 경우입니다.</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default FriendList;
