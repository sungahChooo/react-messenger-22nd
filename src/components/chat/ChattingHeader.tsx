import Header from '@/components//Header';
import searchIcon from '@/assets/search.svg';
import camerIcon from '@/assets/camera.svg';
import chattingRoomIcon from '@/assets/chattingRoom.svg';

export default function ChattingHeader() {
  return (
    <Header
      title="채팅"
      right={
        <div className="flex cursor-pointer gap-4">
          <button onClick={() => alert('준비중입니다.')}>
            <img src={searchIcon} alt="search" />
          </button>
          <button>
            <img src={camerIcon} alt="camera" />
          </button>
          <button>
            <img src={chattingRoomIcon} alt="chattingRoom" />
          </button>
        </div>
      }
      bgColor="white"
    />
  );
}
