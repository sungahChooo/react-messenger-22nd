import type { ChatMessage } from '@/types/chat';
import likeIcon from '@/assets/like.svg';
import defaultProfileIcon from '@/assets/profile.svg';

interface ChatMessageBubbleProps {
  message: ChatMessage;
  myId: number;
  senderName: string;
  profileImage?: string;
  onLike?: () => void;
  showTime?: boolean;
}

export default function ChatMessageBubble({
  message,
  myId,
  senderName,
  profileImage,
  onLike,
  showTime = true,
}: ChatMessageBubbleProps) {
  const isMe = message.sender === myId;

  // 안전하게 시간을 표시하는 함수
  const getDisplayTime = (time?: string) => {
    if (!time) return '시간이 없습니다';
    const date = new Date(time);
    if (isNaN(date.getTime())) {
      // 이미 "3:01 PM" 같이 로컬 문자열이면 그대로 반환
      return time;
    }
    // ISO 문자열이면 locale time으로 변환
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const displayTime = getDisplayTime(message.time);
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
            {isMe && showTime && <span className="text-xs text-gray-400">{displayTime}</span>}
            <div
              className={`max-w-[220px] rounded-tl-sm rounded-tr-xl rounded-br-xl rounded-bl-xl px-3 py-1 break-all ${
                isMe ? 'bg-green-50' : 'bg-white'
              }`}
            >
              {message.message}
            </div>
            {!isMe && showTime && <span className="text-xs text-gray-400">{displayTime}</span>}
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
