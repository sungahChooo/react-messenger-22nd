import type { ChatRoom } from '@/types/chat';
import PinIcon from '@/assets/pin.svg?react';
import profileImage from '@/assets/profile.svg';
import { getParticipantProfiles } from '@/utils/chatUtils';
import users from '@/data/user.json';
import type { User } from '@/types/user';

interface ChatListItemProps {
  room: ChatRoom;
  myId: number;
  onClick: () => void;
  onTogglePin: (roomId: string) => void;
}
// JSON 데이터를 기반으로 id -> 이미지 경로 매핑
const profileImages: Record<number, string> = {};
users.forEach((u) => {
  if (u.profileImage) {
    profileImages[u.id] = `/src/assets/${u.profileImage}`;
  }
});
export default function ChatListItem({ room, myId, onClick, onTogglePin }: ChatListItemProps) {
  const lastMessage = room.messages[room.messages.length - 1];
  // myId 제외한 참여자 가져오기
  const participants: User[] = getParticipantProfiles(room, myId);
  const partnerNames = participants.map((p) => p.name).join(', ');

  return (
    <li className="flex cursor-pointer gap-[8px]" onClick={onClick}>
      <div
        className={`grid gap-1 ${participants.length === 1 ? 'grid-cols-1 grid-rows-1' : ''} ${participants.length === 2 ? 'grid-cols-2 grid-rows-1' : ''} ${participants.length === 3 || participants.length === 4 ? 'grid-cols-2 grid-rows-2' : ''} ${participants.length > 4 ? 'grid-cols-3 grid-rows-3' : ''} h-14 w-14`}
      >
        {participants.slice(0, 9).map((p) => (
          <img
            key={p.id}
            src={profileImages[p.id] || profileImage}
            alt={p.name}
            className="aspect-square w-full rounded-full object-cover"
          />
        ))}
      </div>
      <div className="w-full">
        <p className="flex justify-between">
          <span className="flex items-center font-bold">
            {partnerNames}
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

        <div className="flex justify-between text-sm font-normal text-gray-500">
          <span>{lastMessage.message}</span>
          {/*안읽은 메시지 표시 */}
          {room.unread ? (
            <span className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-green-500 text-center text-xs leading-none text-white">
              {room.unread}
            </span>
          ) : (
            <span />
          )}
        </div>
      </div>
    </li>
  );
}
