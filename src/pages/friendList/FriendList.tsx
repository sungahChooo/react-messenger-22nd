import profile from '@/assets/profile.svg';
import findIcon from '@/assets/search.svg';
import addFriendIcon from '@/assets/addFriend.svg';
import Header from '@/components/Header';
import { useNavigate } from 'react-router-dom';
import friendsData from '@/data/friend.json';
import profile1 from '@/assets/profile1.jpg';
import profile2 from '@/assets/profile2.jpg';
import profile3 from '@/assets/profile3.jpg';
import profile4 from '@/assets/profile4.jpg';
// 이미지 매핑 객체
const images: Record<string, string> = {
  'profile1.jpg': profile1,
  'profile2.jpg': profile2,
  'profile3.jpg': profile3,
  'profile4.jpg': profile4,
};

function FriendList() {
  const navigate = useNavigate();
  const sectionHeaders = ['ㄱ', 'ㄴ', 'ㄷ'];
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
      <div className="mt-12">
        {/* 내 프로필 */}
        <section
          className="my-4 flex cursor-pointer items-center gap-4 px-4"
          onClick={() => {
            navigate('/profile/me');
          }}
        >
          <img src={profile} alt="프로필 이미지" className="h-[65px] w-[65px]" />
          <div>
            <div className="font-bold">정해인</div>
            <div className="text-sm text-gray-500">상태메시지 있는 경우입니다.</div>
          </div>
        </section>
        {/* 친구 리스트 */}
        <ul className="flex flex-col gap-3">
          {friendsData.map((friend, index) => {
            const sectionIndex = Math.floor(index / 3);
            const showHeader = index % 3 === 0;
            return (
              <li key={friend.id} className="flex flex-col gap-3">
                {showHeader && (
                  <p className="mx-4 my-2 border-b border-gray-100 pb-2 text-sm font-semibold text-gray-600">
                    {sectionHeaders[sectionIndex] || ''}
                  </p>
                )}

                <div
                  className="flex cursor-pointer flex-row gap-3 px-4"
                  onClick={() => navigate(`/profile/${friend.id}`)}
                >
                  <img
                    src={friend.profileImage ? images[friend.profileImage] : profile}
                    alt="프로필"
                    className="h-[46px] w-[46px] rounded-full"
                  />
                  <p>
                    <span className="font-bold">{friend.name}</span>
                    {friend.statusMessage && <div className="text-sm text-gray-500">{friend.statusMessage}</div>}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
export default FriendList;
