import { useNavigate } from 'react-router-dom';
import friendsData from '@/data/friend.json';
import profile from '@/assets/profile.svg';
import profile1 from '@/assets/profile1.jpg';
import profile2 from '@/assets/profile2.jpg';
import profile3 from '@/assets/profile3.jpg';
import profile4 from '@/assets/profile4.jpg';

export default function FriendListSection() {
  // 이미지 매핑 객체
  const images: Record<string, string> = {
    'profile1.jpg': profile1,
    'profile2.jpg': profile2,
    'profile3.jpg': profile3,
    'profile4.jpg': profile4,
  };
  const navigate = useNavigate();
  const sectionHeaders = ['ㄱ', 'ㄴ', 'ㄷ'];
  return (
    <ul className="mb-4 flex w-full flex-col gap-3">
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
              className="flex cursor-pointer flex-row items-center gap-3 px-4"
              onClick={() => navigate(`/profile/${friend.id}`)}
            >
              <img
                src={friend.profileImage ? images[friend.profileImage] : profile}
                alt="프로필"
                className="h-[46px] w-[46px] rounded-full"
              />
              <p className="flex flex-col">
                <span className="text-lg font-medium">{friend.name}</span>
                {friend.statusMessage && (
                  <span className="text-sm text-xs font-medium text-gray-500">{friend.statusMessage}</span>
                )}
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
