import Header from '@/components/Header';
import searchIcon from '@/assets/search.svg';
import defaultProfile from '@/assets/profile.svg';
import callChattingRoomIcon from '@/assets/call.svg';
import faceTimeIcon from '@/assets/facetimeIcon.svg';
import { useNavigate } from 'react-router-dom';

interface Props {
  participantName: string;
  profileImage?: string;
}

export default function ChattingRoomHeader({ participantName, profileImage }: Props) {
  const navigate = useNavigate();

  const participants: User[] = getParticipantProfiles(room, myId);
  const partnerNames = participants.map((p) => p.name).join(', ');
  return (
    <Header
      title={
        <div className="flex items-center gap-2 text-[17px]">
          <span onClick={() => navigate('/chat')} className="cursor-pointer">
            <div
              className={`grid gap-1 ${participants.length === 1 ? 'grid-cols-1 grid-rows-1' : ''} ${participants.length === 2 ? 'grid-cols-2 grid-rows-1' : ''} ${participants.length === 3 || participants.length === 4 ? 'grid-cols-2 grid-rows-2' : ''} ${participants.length > 4 ? 'grid-cols-3 grid-rows-3' : ''} h-14 w-14`}
            >
              {participants.slice(0, 9).map((p) => (
                <img
                  key={p.id}
                  src={profileImages[p.id] || profileImage}
                  alt={p.name}
                  className="aspect-square max-h-[56px] w-full rounded-full object-cover"
                />
              ))}
            </div>
          </span>
          <img src={profileImage || defaultProfile} alt="profile" className="h-9 w-9 rounded-full" />
          <span>{participantName}</span>
        </div>
      }
      right={
        <div className="flex gap-[16px]">
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
