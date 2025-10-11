import type { Message } from '@/types/chat';
import likeIcon from '@/assets/like.svg';

interface ChatMessageBubbleProps {
  message: Message;
  onLike?: () => void;
}

export default function ChatMessageBubble({ message, onLike }: ChatMessageBubbleProps) {
  return (
    <div className={`mb-1 flex items-start gap-2 ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
      {message.sender === 'friend' && <img src="/path/to/profile.svg" alt="프로필" className="h-9 w-9 rounded-full" />}

      <div className={`flex flex-col ${message.sender === 'me' ? 'items-end' : 'items-start'}`}>
        {message.sender === 'friend' && <span className="mb-1 text-xs text-gray-500">친구 이름</span>}
        <div className="group flex items-end gap-2">
          <div
            className={`max-w-[220px] rounded-tl-sm rounded-tr-xl rounded-br-xl rounded-bl-xl px-3 py-1 break-all ${
              message.sender === 'me' ? 'bg-green-50' : 'bg-white'
            }`}
          >
            {message.message}
          </div>
          {message.sender === 'friend' && (
            <div className="flex cursor-pointer items-center gap-1" onClick={onLike}>
              <img src={likeIcon} alt="like" className="h-4 w-4" />
              <span className={`${message.likedByMe ? 'text-green-600' : 'text-gray-600'}`}>{message.likes}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
