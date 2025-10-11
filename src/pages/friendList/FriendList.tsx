import FriendListHeader from '@/pages/friendList/FriendListHeader';
import MyProfileSection from '@/pages/friendList/MyProfileSection';
import FriendListSection from '@/pages/friendList/FriendListSection';

function FriendList() {
  return (
    <div className="items font-pretendard absolute top-0 left-1/2 z-800 min-h-screen w-full max-w-[375px] -translate-x-1/2 bg-white pb-[65px]">
      <FriendListHeader />
      <MyProfileSection />
      <FriendListSection />
    </div>
  );
}
export default FriendList;
