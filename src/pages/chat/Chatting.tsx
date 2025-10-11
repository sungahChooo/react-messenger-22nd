import banner from '@/assets/banner.svg';
import Header from '@/components/Header';
import searchIcon from '@/assets/search.svg';
import camerIcon from '@/assets/camera.svg';
import chattingRoomIcon from '@/assets/chattingRoom.svg';
import profileICon from '@/assets/profile.svg';
import PinIcon from '@/assets/pin.svg?react';
import { useNavigate } from 'react-router-dom';
import chatDataJson from '@/data/chat.json';
import { useState } from 'react';

interface ChatMessage {
  roomId: string;
  sender: string;
  message: string;
  time: string;
  likes: number;
  likedByMe: boolean;
  isPinned?: boolean;
  unread?: number;
}

interface ChatRoom {
  roomId: string;
  messages: ChatMessage[];
  isPinned: boolean;
  unread?: number;
}

function Chatting() {
  const navigate = useNavigate();
  const myName = '나'; //
  // const chatData = [...chatDataJson];

  // 1️⃣ room 단위로 묶기
  const roomsMap: Record<string, ChatRoom> = {};
  chatDataJson.forEach((msg: ChatMessage) => {
    if (!roomsMap[msg.roomId]) {
      roomsMap[msg.roomId] = { roomId: msg.roomId, messages: [], isPinned: false };
    }
    roomsMap[msg.roomId].messages.push(msg);
    // room 단위 pinned = 하나라도 메시지가 pinned면 true
    if (msg.isPinned) roomsMap[msg.roomId].isPinned = true;
  });

  // 2️⃣ useState로 상태 관리
  const [chatRooms, setChatRooms] = useState<ChatRoom[]>(
    Object.values(roomsMap).sort((a, b) => {
      if (a.isPinned && !b.isPinned) return -1;
      if (!a.isPinned && b.isPinned) return 1;
      const aLast = new Date(a.messages[a.messages.length - 1].time).getTime();
      const bLast = new Date(b.messages[b.messages.length - 1].time).getTime();
      return bLast - aLast;
    }),
  );
  // 3️⃣ 고정 토글 함수
  const togglePin = (roomId: string) => {
    setChatRooms((prev) => {
      const updated = prev.map((room) => (room.roomId === roomId ? { ...room, isPinned: !room.isPinned } : room));

      // 다시 정렬
      return updated.sort((a, b) => {
        if (a.isPinned && !b.isPinned) return -1;
        if (!a.isPinned && b.isPinned) return 1;
        const aLast = new Date(a.messages[a.messages.length - 1].time).getTime();
        const bLast = new Date(b.messages[b.messages.length - 1].time).getTime();
        return bLast - aLast;
      });
    });
  };

  return (
    <div className="items font-pretendard mx-auto min-h-screen w-full max-w-[375px] bg-white pb-[65px]">
      {/* 상단 헤더 재사용*/}
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
      <div className="mt-12">
        {/* 배너 */}
        <div className="mb-4 flex cursor-pointer items-center justify-center rounded px-4">
          <img src={banner} className="h-[71px] w-[343px]" />
        </div>

        {/* 채팅방 리스트 */}
        <div>
          <ul className="mb-4 flex cursor-pointer flex-col gap-6 px-4">
            {chatRooms.map((room, i) => {
              const lastMessage = room.messages[room.messages.length - 1];
              const partnerName = room.messages.find((msg) => msg.sender !== myName)?.sender || '알 수 없음';
              return (
                <li
                  key={i}
                  className="flex items-center gap-4"
                  onClick={() => navigate(`/chattingroom/${room.roomId}`)}
                >
                  <img src={profileICon} className="h-[56px]" /> {/* 채팅방 이미지 */}
                  <div className="w-full">
                    <p className="flex justify-between">
                      <span className="flex items-center font-bold">
                        {partnerName}
                        <button
                          onClick={(e) => {
                            e.stopPropagation(); // 채팅방 클릭 이벤트 방지
                            togglePin(room.roomId);
                          }}
                          className="cursor-pointer"
                        >
                          <PinIcon className={room.isPinned ? 'text-gray-500' : 'text-gray-100'} />
                        </button>
                      </span>
                      <span className="text-xs text-gray-400">{lastMessage.time}</span>
                    </p>
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>{lastMessage.message}</span>
                      <span className="h-[18px] w-[18px] rounded-full bg-green-500 text-center text-white">
                        {room.unread}f
                      </span>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Chatting;
