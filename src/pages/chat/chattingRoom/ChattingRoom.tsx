import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import type { ChatMessage } from '@/types/chat';
import ChattingRoomHeader from './ChattingRoomHeader';
import ChatMessageBubble from './ChatMsgBubble';
import ChatInput from './ChatRoomInput';
import chatData from '@/data/chat.json';
import users from '@/data/user.json';
import { formatTime, saveMessages, loadMessages } from '@/utils/chatUtils';

export default function ChattingRoom() {
  const { roomId } = useParams<{ roomId: string }>();
  const myId = 1; // 내 ID
  const room = chatData.find((r) => r.roomId === roomId);

  const [messages, setMessages] = useState<ChatMessage[]>(() => loadMessages(roomId!, room?.messages ?? []));
  const [input, setInput] = useState('');

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const prevLengthRef = useRef(0);
  useEffect(() => {
    if (messages.length > prevLengthRef.current) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
    prevLengthRef.current = messages.length;
  }, [messages]);

  const handleSend = () => {
    if (!input.trim() || !roomId) return;
    const newMessage: ChatMessage = {
      sender: myId,
      message: input,
      time: formatTime(new Date()),
      roomId,
      likes: 0,
      likedByMe: false,
    };
    setMessages((prev) => {
      const updated = [...prev, newMessage];
      saveMessages(roomId, updated);
      return updated;
    });
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.nativeEvent.isComposing) handleSend();
  };

  const handleLike = (index: number) => {
    setMessages((prev) => {
      const updated = prev.map((msg, i) =>
        i === index ? { ...msg, likes: (msg.likes ?? 0) + (msg.likedByMe ? -1 : 1), likedByMe: !msg.likedByMe } : msg,
      );
      saveMessages(roomId!, updated);
      return updated;
    });
  };

  // 내 ID 제외하고 상대 정보 가져오기
  const otherUserId = room?.participants.find((id) => id !== myId);
  const otherUser = users.find((u) => u.id === otherUserId);
  return (
    <div className="bg-light-gray font-pretendard mx-auto min-h-screen w-full max-w-[375px] pb-[65px]">
      {otherUser && <ChattingRoomHeader participantName={otherUser.name} profileImage={otherUser.profileImage} />}
      <div className="mx-3 mt-13 flex max-w-[345px] flex-col gap-1 overflow-y-auto">
        <div className="flex justify-center">
          <span className="mb-6 h-[32px] w-[115px] rounded-2xl bg-green-50 px-2 py-2 text-center text-xs font-normal text-gray-500">
            2024년 6월 19일
          </span>
        </div>
        {messages.map((msg, idx) => (
          <ChatMessageBubble key={idx} message={msg} onLike={() => handleLike(idx)} />
        ))}
        <div ref={messagesEndRef} />
      </div>
      <ChatInput
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onSend={handleSend}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}
