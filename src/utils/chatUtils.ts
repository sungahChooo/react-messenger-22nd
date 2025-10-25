import type { ChatRoom, ChatMessage } from '@/types/chat';
import type { User } from '@/types/user';
import users from '@/data/user.json';

export function sortChatRooms(rooms: ChatRoom[]): ChatRoom[] {
  return [...rooms].sort((a, b) => {
    if (a.isPinned && !b.isPinned) return -1;
    if (!a.isPinned && b.isPinned) return 1;
    const aLast = new Date(a.messages[a.messages.length - 1].time).getTime();
    const bLast = new Date(b.messages[b.messages.length - 1].time).getTime();
    return bLast - aLast;
  });
}

export const formatTime = (date: Date) => {
  const hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const hour12 = hours % 12 || 12;
  return `${hour12}:${minutes} ${ampm} `;
};

export const saveMessages = (roomId: string, messages: ChatMessage[]) => {
  localStorage.setItem(`chat_${roomId}`, JSON.stringify(messages));
};

export const loadMessages = (roomId: string, defaultMessages: ChatMessage[] = []): ChatMessage[] => {
  const saved = localStorage.getItem(`chat_${roomId}`);
  return saved ? JSON.parse(saved) : defaultMessages;
};

export function getParticipantProfiles(room: ChatRoom, myId: number): User[] {
  return room.participants.filter((id) => id !== myId).map((id) => users.find((u) => u.id === id));
}
