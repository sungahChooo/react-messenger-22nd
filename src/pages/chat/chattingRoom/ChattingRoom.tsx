import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import ChattingRoomHeader from '../../../components/chat/chatRoom/ChattingRoomHeader';
import ChatMessageBubble from '../../../components/chat/chatRoom/ChatMsgBubble';
import ChatInput from '../../../components/chat/chatRoom/ChatRoomInput';
import users from '@/data/user.json';
import { useChatStore } from '@/stores/chatStore';
import { profileImages } from '@/data/profileImages';

export default function ChattingRoom() {
  const myId = 1;
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

  const getFormattedDate = (date = new Date()) =>
    `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;

  const handleSend = () => {
    if (!input.trim() || !roomId) return;
    const now = new Date();
    addMessage({
      sender: myId,
      message: input,
      time: new Date().toISOString(),
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

  const today = getFormattedDate(new Date());
  const todayMessages = messages.filter((msg) => msg.date === today);

  return (
    <div className="bg-light-gray font-pretendard mx-auto min-h-screen w-full max-w-[375px] pb-[65px]">
      {currentRoom && <ChattingRoomHeader room={currentRoom} myId={myId} />}
      <div className="mx-3 mt-13 flex max-w-[345px] flex-col gap-1 overflow-y-auto">
        <div className="mt-4 mb-2 flex justify-center">
          <span className="h-[32px] w-[130px] rounded-2xl bg-green-50 px-2 py-2 text-center text-xs font-normal text-gray-500">
            2025년 1월 1일
          </span>
        </div>
        {/* 기존 더미 메시지 */}
        {messages
          .filter((msg) => !msg.date) // 날짜 없는 더미 메시지
          .map((msg, idx) => {
            const sender = users.find((u) => u.id === msg.sender);
            return (
              <ChatMessageBubble
                key={msg.time + idx}
                message={msg}
                myId={myId}
                senderName={sender?.name || '친구'}
                profileImage={profileImages[sender?.id || 0]}
                onLike={() => toggleLike(idx)}
                showTime={true}
              />
            );
          })}

        {/* 오늘 날짜 라벨 */}
        {todayMessages.length > 0 && (
          <div className="mt-4 mb-2 flex justify-center">
            <span className="h-[32px] w-[130px] rounded-2xl bg-green-50 px-2 py-2 text-center text-xs font-normal text-gray-500">
              {today}
            </span>
          </div>
        )}

        {/* 오늘 메시지 */}
        {todayMessages.map((msg, idx) => {
          const sender = users.find((u) => u.id === msg.sender);
          const nextMessage = todayMessages[idx + 1];
          const showTime =
            !nextMessage ||
            new Date(nextMessage.time).getHours() !== new Date(msg.time).getHours() ||
            new Date(nextMessage.time).getMinutes() !== new Date(msg.time).getMinutes();
          return (
            <ChatMessageBubble
              key={msg.time + idx}
              message={msg}
              myId={myId}
              senderName={sender?.name || '친구'}
              profileImage={profileImages[sender?.id || 0]}
              onLike={() => toggleLike(idx)}
              showTime={showTime}
            />
          );
        })}

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
