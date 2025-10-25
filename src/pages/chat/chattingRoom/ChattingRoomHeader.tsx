import Header from '@/components/Header';
import searchIcon from '@/assets/search.svg';
import callChattingRoomIcon from '@/assets/call.svg';
import faceTimeIcon from '@/assets/facetimeIcon.svg';
import backIcon from '@/assets/before.svg';
import { useNavigate } from 'react-router-dom';
import type { User } from '@/types/user';
import ChattingListImgSection from '../ChattingListImgSection';
import { getParticipantProfiles } from '@/utils/chatUtils';
import type { ChatRoom } from '@/types/chat';

interface ChattingRoomHeaderProps {
  room: ChatRoom;
  myId: number;
}

export default function ChattingRoomHeader({ room, myId }: ChattingRoomHeaderProps) {
  const navigate = useNavigate();
  const participants: User[] = getParticipantProfiles(room, myId);
  const names = participants.map((p) => p.name).join(', ');

  return (
    <Header
      title={
        <div className="flex items-center gap-2 text-[17px]">
          <span onClick={() => navigate('/chat')} className="h-9 w-9 cursor-pointer">
            <img src={backIcon} alt="back" />
          </span>
          <div className="h-9 w-9">
            <ChattingListImgSection participants={participants} />
          </div>
          <span>{names}</span>
        </div>
      }
      right={
        <div className="flex gap-4">
          <button onClick={() => alert('준비중입니다.')}>
            <img src={searchIcon} alt="search" />
          </button>
          <button>
            <img src={callChattingRoomIcon} alt="call" />
          </button>
          <button>
            <img src={faceTimeIcon} alt="video" />
          </button>
        </div>
      }
      bgColor="#d9d9d9"
    />
  );
}
