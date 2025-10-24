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
    <li className="flex cursor-pointer items-center justify-between" onClick={onClick}>
      <div className="flex items-center gap-3">
        <ChattingListImgSection participants={participants} />
        <div>
          <p className="font-semibold">{participants.map((p) => p.name).join(', ')}</p>
          <p className="text-sm text-gray-500">{room.lastMessage}</p>
        </div>
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          togglePin(room.roomId);
        }}
      >
        <PinIcon className={room.isPinned ? 'fill-gray-600' : 'fill-gray-300'} />
      </button>
    </li>
  );
}
