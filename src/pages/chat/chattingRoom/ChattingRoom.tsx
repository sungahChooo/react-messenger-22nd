import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import type { Message } from '@/types/chat';
import ChattingRoomHeader from './ChattingRoomHeader';
import ChatMessageBubble from './ChatMsgBubble';
import ChatInput from './ChatRoomInput';
import chatData from '@/data/chat.json';
import { formatTime, saveMessages, loadMessages } from '@/utils/chatUtils';

export default function ChattingRoom() {
  const { roomId } = useParams<{ roomId: string }>();
  const [messages, setMessages] = useState<Message[]>(() => loadMessages(roomId!, chatData));
  const [input, setInput] = useState('');

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim() || !roomId) return;
    const newMessage: Message = {
      sender: 'me',
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

  const handleLike = (index: number) => {
    setMessages((prev) => {
      const updated = prev.map((msg, i) =>
        i === index ? { ...msg, likes: (msg.likes ?? 0) + (msg.likedByMe ? -1 : 1), likedByMe: !msg.likedByMe } : msg,
      );
      saveMessages(roomId!, updated);
      return updated;
    });
  };

  return (
    <div className="bg-light-gray font-pretendard mx-auto min-h-screen w-full max-w-[375px] pb-[65px]">
      <ChattingRoomHeader />
      <div className="mx-3 mt-13 flex max-w-[345px] flex-col gap-1 overflow-y-auto">
        {messages.map((msg, idx) => (
          <ChatMessageBubble key={idx} message={msg} onLike={() => handleLike(idx)} />
        ))}
        <div ref={messagesEndRef} />
      </div>
      <ChatInput value={input} onChange={(e) => setInput(e.target.value)} onSend={handleSend} />
    </div>
  );
}
