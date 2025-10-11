import type { ChatMessage, ChatRoom, Message } from '@/types/chat';

export function groupMessagesByRoom(chatData: ChatMessage[]): ChatRoom[] {
  const roomsMap: Record<string, ChatRoom> = {};

  chatData.forEach((msg) => {
    if (!roomsMap[msg.roomId]) {
      roomsMap[msg.roomId] = { roomId: msg.roomId, messages: [], isPinned: false };
    }
    roomsMap[msg.roomId].messages.push(msg);
    if (msg.isPinned) roomsMap[msg.roomId].isPinned = true;
  });

  return Object.values(roomsMap);
}

export function sortChatRooms(rooms: ChatRoom[]): ChatRoom[] {
  return [...rooms].sort((a, b) => {
    if (a.isPinned && !b.isPinned) return -1;
    if (!a.isPinned && b.isPinned) return 1;
    const aLast = new Date(a.messages[a.messages.length - 1].time).getTime();
    const bLast = new Date(b.messages[b.messages.length - 1].time).getTime();
    return bLast - aLast;
  });
}
// 시간 포맷 함수
export function formatTime(date: Date): string {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const formattedHour = hours % 12 === 0 ? 12 : hours % 12;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  return `${formattedHour}:${formattedMinutes} ${ampm}`;
}

// 메시지 저장
export function saveMessages(roomId: string, messages: Message[]) {
  localStorage.setItem(`chatMessages_${roomId}`, JSON.stringify(messages));
}

// 메시지 불러오기
export function loadMessages(roomId: string, fallback: Message[]): Message[] {
  const stored = localStorage.getItem(`chatMessages_${roomId}`);
  return stored ? JSON.parse(stored) : fallback;
}
