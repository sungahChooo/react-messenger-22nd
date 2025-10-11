// src/pages/chat/Chatting.tsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import banner from '@/assets/banner.svg';
import chatDataJson from '@/data/chat.json';
import ChattingHeader from '@/pages/chat/ChattingHeader';
import ChatListItem from '@/pages/chat/ChatListItem';
import type { ChatRoom, ChatMessage } from '@/types/chat';
import { groupMessagesByRoom, sortChatRooms } from '@/utils/chatUtils';

export default function Chatting() {
  const navigate = useNavigate();
  const myName = '나';

  const initialRooms = sortChatRooms(groupMessagesByRoom(chatDataJson as ChatMessage[]));
  const [chatRooms, setChatRooms] = useState<ChatRoom[]>(initialRooms);

  const togglePin = (roomId: string) => {
    setChatRooms((prev) => {
      const updated = prev.map((r) => (r.roomId === roomId ? { ...r, isPinned: !r.isPinned } : r));
      return sortChatRooms(updated);
    });
  };

  return (
    <div className="items font-pretendard mx-auto min-h-screen w-full max-w-[375px] bg-white pb-[65px]">
      <ChattingHeader />
      <div className="mt-12">
        <div className="mb-4 flex cursor-pointer items-center justify-center rounded px-4">
          <img src={banner} className="h-[71px] w-[343px]" />
        </div>

        <ul className="flex flex-col gap-6 px-4">
          {chatRooms.map((room) => (
            <ChatListItem
              key={room.roomId}
              room={room}
              myName={myName}
              onClick={() => navigate(`/chattingroom/${room.roomId}`)}
              onTogglePin={togglePin}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
