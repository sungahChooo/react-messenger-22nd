import type { ChatMessage } from '@/types/chat';
import likeIcon from '@/assets/like.svg';
import profileIcon from '@/assets/profile.svg';

interface ChatMessageBubbleProps {
  message: ChatMessage;
  onLike?: () => void;
}

export default function ChatMessageBubble({ message, onLike }: ChatMessageBubbleProps) {
  return (
    <div className={`mb-1 flex items-start gap-2 ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
      {message.sender === 'friend' && <img src={profileIcon} alt="프로필" className="h-9 w-9 rounded-full" />}

      <div className={`flex flex-col ${message.sender === 'me' ? 'items-end' : 'items-start'}`}>
        {message.sender === 'friend' && <span className="mb-1 text-xs text-gray-500">친구 이름</span>}
        <div className="group flex flex-col items-start gap-1">
          <div
            className={`max-w-[220px] rounded-tl-sm rounded-tr-xl rounded-br-xl rounded-bl-xl px-3 py-1 break-all ${
              message.sender === 'me' ? 'bg-green-50' : 'bg-white'
            }`}
          >
            {message.message}
          </div>
          {message.sender === 'friend' && (
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
