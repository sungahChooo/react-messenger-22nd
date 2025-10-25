import type { ChatMessage } from '@/types/chat';
import likeIcon from '@/assets/like.svg';
import defaultProfileIcon from '@/assets/profile.svg';

interface ChatMessageBubbleProps {
  message: ChatMessage;
  myId: number;
  senderName: string;
  profileImage?: string;
  onLike?: () => void;
  prevMessage?: boolean | ChatMessage | null;
}

export default function ChatMessageBubble({
  message,
  myId,
  senderName,
  profileImage,
  onLike,
  prevMessage,
}: ChatMessageBubbleProps) {
  const isMe = message.sender === myId;
  const showSenderInfo =
    !prevMessage ||
    (() => {
      const prev = new Date(prevMessage.time);
      const curr = new Date(message.time);
      return !(prev.getHours() === curr.getHours() && prev.getMinutes() === curr.getMinutes());
    })();
  const displayTime = new Date(message.time).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });
  return (
    <div className={`mb-1 flex items-start gap-2 ${isMe ? 'justify-end' : 'justify-start'}`}>
      {/*친구만 프로필 이미지 표시 */}
      {!isMe && <img src={profileImage || defaultProfileIcon} className="h-9 w-9 rounded-full" />}

      {/*메시지 버블 */}
      <div className={`flex flex-col ${!isMe ? 'items-end' : 'items-start'}`}>
        {/*메시지 + 좋아요 */}
        <div className="group flex flex-col items-start gap-1">
          {/*사용자 이름 */}
          {!isMe && <span className="text-xs text-gray-500">{senderName}</span>}
          {/*메시지 내용,시간 */}
          <div className="flex flex-row items-end gap-1">
            {isMe && showSenderInfo && <span className="text-xs text-gray-400">{displayTime}</span>}
            <div
              className={`max-w-[220px] rounded-tl-sm rounded-tr-xl rounded-br-xl rounded-bl-xl px-3 py-1 break-all ${
                isMe ? 'bg-green-50' : 'bg-white'
              }`}
            >
              {message.message}
            </div>
            {!isMe && showSenderInfo && <span className="text-xs text-gray-400">{displayTime}</span>}
          </div>
          {!isMe && (
            <div
              className={`flex cursor-pointer items-center gap-1 rounded-full bg-gray-200 px-2 py-1 text-xs ${
                message.likes === 0 ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'
              }`}
              onClick={onLike}
            >
              <p className="flex h-4 w-4 items-center justify-center rounded-full bg-white">
                <img src={likeIcon} />
              </p>
              <span className={`text-xs font-semibold ${message.likedByMe ? 'text-green-600' : 'text-gray-600'}`}>
                {message.likes}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
