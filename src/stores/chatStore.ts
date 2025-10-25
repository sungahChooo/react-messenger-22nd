import { create } from 'zustand';
import chatDataJson from '@/data/chat.json';
import type { ChatRoom, ChatMessage } from '@/types/chat';
import { sortChatRooms } from '@/utils/chatUtils';

interface ChatState {
  chatRooms: ChatRoom[];
  togglePin: (roomId: string) => void;
  currentRoom: ChatRoom | null;
  messages: ChatMessage[];
  setCurrentRoom: (roomId: string) => void;
  addMessage: (message: ChatMessage) => void;
  toggleLike: (index: number) => void;
}

export const useChatStore = create<ChatState>((set) => ({
  chatRooms: sortChatRooms(chatDataJson as ChatRoom[]),
  currentRoom: null,
  messages: [],
  togglePin: (roomId) =>
    set((state) => {
      const updated = state.chatRooms.map((r) => (r.roomId === roomId ? { ...r, isPinned: !r.isPinned } : r));
      return { chatRooms: sortChatRooms(updated) };
    }),

  setCurrentRoom: (roomId) => {
    const room = get().chatRooms.find((r) => r.roomId === roomId) || null;
    set({
      currentRoom: room,
      messages: room ? room.messages : [],
    });
  },
  addMessage: (message) => {
    set((state) => ({ messages: [...state.messages, message] }));
  },
  toggleLike: (index) => {
    set((state) => {
      const updated = state.messages.map((msg, i) =>
        i === index ? { ...msg, likes: msg.likedByMe ? msg.likes - 1 : msg.likes + 1, likedByMe: !msg.likedByMe } : msg,
      );
      return { messages: updated };
    });
  },
}));

function get() {
  return useChatStore.getState();
}
