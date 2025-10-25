import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import ChattingRoomHeader from './ChattingRoomHeader';
import ChatMessageBubble from './ChatMsgBubble';
import ChatInput from './ChatRoomInput';
import users from '@/data/user.json';
import { useChatStore } from '@/stores/chatStore';
import { formatTime } from '@/utils/chatUtils';
import { profileImages } from '@/data/profileImages';
import type { ChatMessage } from '@/types/chat';
type GroupedMessages = Record<string, ChatMessage[]>;

export default function ChattingRoom() {
  const myId = 1; // 내 ID
  const [input, setInput] = useState('');
  const { currentRoom, setCurrentRoom, messages, addMessage, toggleLike } = useChatStore();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const prevLengthRef = useRef(0);
  const { roomId } = useParams<{ roomId: string }>();

  useEffect(() => {
    if (roomId) setCurrentRoom(roomId);
  }, [roomId]);

  useEffect(() => {
    if (messages.length > prevLengthRef.current) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
    prevLengthRef.current = messages.length;
  }, [messages]);

  const getFormattedDate = (date = new Date()) => {
    return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;
  };

  const handleSend = () => {
    if (!input.trim() || !roomId) return;
    const now = new Date();
    //const now = new Date('2025-10-26T09:00:00');
    addMessage({
      sender: myId,
      message: input,
      time: formatTime(new Date()),
      roomId,
      likes: 0,
      likedByMe: false,
      date: getFormattedDate(now),
    });
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.nativeEvent.isComposing) handleSend();
  };

  // 메시지를 날짜별로 그룹화
  const groupedMessages: GroupedMessages = messages.reduce((acc, msg) => {
    const date = msg.date || getFormattedDate(new Date());
    if (!acc[date]) acc[date] = [];
    acc[date].push(msg);
    return acc;
  }, {} as GroupedMessages);

  return (
    <div className="bg-light-gray font-pretendard mx-auto min-h-screen w-full max-w-[375px] pb-[65px]">
      {currentRoom && <ChattingRoomHeader room={currentRoom} myId={myId} />}
      <div className="mx-3 mt-13 flex max-w-[345px] flex-col gap-1 overflow-y-auto">
        <div className="flex justify-center">
          <span className="mb-6 h-[32px] w-[115px] rounded-2xl bg-green-50 px-2 py-2 text-center text-xs font-normal text-gray-500">
            2024년 6월 19일
          </span>
        </div>
        {Object.entries(groupedMessages).map(([date, msgs]) => (
          <div key={date}>
            {/* 날짜 라벨 */}
            <div className="flex justify-center">
              <span className="mb-6 h-[32px] w-[130px] rounded-2xl bg-green-50 px-2 py-2 text-center text-xs font-normal text-gray-500">
                {date}
              </span>
            </div>

            {/* 메시지들 */}
            {msgs.map((msg: ChatMessage, idx: number) => {
              const sender = users.find((u) => u.id === msg.sender);
              return (
                <ChatMessageBubble
                  key={idx}
                  message={msg}
                  myId={myId}
                  senderName={sender?.name || '친구'}
                  profileImage={profileImages[sender?.id || 0]}
                  onLike={() => toggleLike(idx)}
                />
              );
            })}
          </div>
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
