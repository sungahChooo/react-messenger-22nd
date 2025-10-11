import type { ChatRoom } from '@/types/chat';
import PinIcon from '@/assets/pin.svg?react';
import profileIcon from '@/assets/profile.svg';

interface ChatListItemProps {
  room: ChatRoom;
  myName: string;
  onClick: () => void;
  onTogglePin: (roomId: string) => void;
}

export default function ChatListItem({ room, myName, onClick, onTogglePin }: ChatListItemProps) {
  const lastMessage = room.messages[room.messages.length - 1];
  const partnerName = room.messages.find((msg) => msg.sender !== myName)?.sender || '알 수 없음';

  return (
    <li className="flex cursor-pointer items-center gap-4" onClick={onClick}>
      <img src={profileIcon} className="h-[56px]" />
      <div className="w-full">
        <p className="flex justify-between">
          <span className="flex items-center font-bold">
            {partnerName}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onTogglePin(room.roomId);
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
          {room.unread ? (
            <span className="h-[18px] w-[18px] rounded-full bg-green-500 text-center text-white">{room.unread}</span>
          ) : (
            <span />
          )}
        </div>
      </div>
    </li>
  );
}
