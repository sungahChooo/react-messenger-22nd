import Header from '@/components/Header';
import findIcon from '@/assets/search.svg';
import addFriendIcon from '@/assets/addFriend.svg';
export default function FriendListHeader() {
  return (
    <Header
      title="친구"
      right={
        <div className="flex cursor-pointer gap-4">
          <img src={findIcon} alt="search" className="h-[24px] w-[24px]" />
          <img src={addFriendIcon} alt="camera" className="h-[24px] w-[24px]" />
        </div>
      }
      bgColor="white"
    />
  );
}
