import type { ChatRoom } from '@/types/chat';
import PinIcon from '@/assets/pin.svg?react';
import { getParticipantProfiles } from '@/utils/chatUtils';
import { useChatStore } from '@/stores/chatStore';
import ChattingListImgSection from './ChattingListImgSection';

interface ChatListItemProps {
  room: ChatRoom;
  myId: number;
  onClick: () => void;
}

export default function ChatListItem({ room, myId, onClick }: ChatListItemProps) {
  const { togglePin } = useChatStore();
  const participants = getParticipantProfiles(room, myId);

  return (
    <li className="flex cursor-pointer gap-2" onClick={onClick}>
      <div className="h-14 w-14">
        <ChattingListImgSection participants={participants} />
      </div>
      <div className="flex w-full flex-col gap-1">
        <div className="flex items-end justify-between">
          <p className="flex items-center justify-center">
            <span className="text-lg font-semibold">{participants.map((p) => p.name).join(', ')}</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                togglePin(room.roomId);
              }}
              className="cursor-pointer"
            >
              <PinIcon
                className={room.isPinned ? 'fill-gray-600 stroke-gray-600' : 'fill-gray-300 stroke-gray-300'}
                stroke="none"
              />
            </button>
          </p>
          <span className="text-xs font-normal text-gray-600">{room.messages[0].time}</span>
        </div>
        <p className="text-sm font-normal text-gray-500">{room.lastMessage}</p>
      </div>
    </li>
  );
}
