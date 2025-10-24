import { create } from 'zustand';
import chatDataJson from '@/data/chat.json';
import type { ChatRoom } from '@/types/chat';
import { sortChatRooms } from '@/utils/chatUtils';

interface ChatState {
  chatRooms: ChatRoom[];
  togglePin: (roomId: string) => void;
}

export const useChatStore = create<ChatState>((set) => ({
  chatRooms: sortChatRooms(chatDataJson as ChatRoom[]),

  togglePin: (roomId) =>
    set((state) => {
      const updated = state.chatRooms.map((r) => (r.roomId === roomId ? { ...r, isPinned: !r.isPinned } : r));
      return { chatRooms: sortChatRooms(updated) };
    }),
}));
