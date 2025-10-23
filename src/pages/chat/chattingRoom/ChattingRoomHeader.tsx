import Header from '@/components/Header';
import beforeIcon from '../../../assets/before.svg';
import profileIcon from '../../../assets/profile.svg';
import searchIcon from '../../../assets/search.svg';
import callChattingRoomIcon from '../../../assets/call.svg';
import faceTimeIcon from '../../../assets/facetimeIcon.svg';
import { useNavigate } from 'react-router-dom';

export default function ChattingRoomHeader() {
  const navigate = useNavigate();
  return (
    <Header
      title={
        <div className="flex items-center gap-2 text-[17px]">
          <span onClick={() => navigate('/chat')} className="cursor-pointer">
            <img src={beforeIcon} alt="before" className="h-6 w-6" />
          </span>
          <img src={profileIcon} alt="profile" className="h-9 w-9 rounded-full" />
          <span>{}</span>
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
