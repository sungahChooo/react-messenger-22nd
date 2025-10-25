import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
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

export const useChatStore = create<ChatState>()(
  persist(
    (set, get) => ({
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

        const currentMessages = get().messages;

        // messages가 이미 존재하면 덮어쓰지 않음
        const messagesToSet =
          currentMessages.length > 0 && get().currentRoom?.roomId === roomId ? currentMessages : (room?.messages ?? []);

        set({
          currentRoom: room,
          messages: messagesToSet,
        });
      },

      addMessage: (message) => {
        set((state) => ({ messages: [...state.messages, message] }));
      },

      toggleLike: (index) => {
        set((state) => {
          const updated = state.messages.map((msg, i) =>
            i === index
              ? {
                  ...msg,
                  likes: msg.likedByMe ? msg.likes - 1 : msg.likes + 1,
                  likedByMe: !msg.likedByMe,
                }
              : msg,
          );
          return { messages: updated };
        });
      },
    }),
    {
      name: 'chat-storage', // 🔹 localStorage에 저장될 key
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
