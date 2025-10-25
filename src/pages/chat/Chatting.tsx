import { useNavigate } from 'react-router-dom';
import ChattingHeader from '@/pages/chat/ChattingHeader';
import ChatListItem from '@/pages/chat/ChatListItem';
import Banner from './ChatBanner';
import { useChatStore } from '@/stores/chatStore';

export default function Chatting() {
  const navigate = useNavigate();
  const { chatRooms } = useChatStore();

  return (
    <div className="items font-pretendard mx-auto min-h-screen w-full max-w-[375px] bg-white pt-12 pb-[65px]">
      <ChattingHeader />
      <Banner />
      <ul className="mb-4 flex flex-col gap-6 px-4">
        {chatRooms.map((room) => (
          <ChatListItem
            key={room.roomId}
            room={room}
            myId={1}
            onClick={() => navigate(`/chattingroom/${room.roomId}`)}
          />
        ))}
      </ul>
    </div>
  );
}
