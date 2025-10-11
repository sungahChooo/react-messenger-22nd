export interface ChatMessage {
  roomId: string;
  sender: string;
  message: string;
  time: string;
  likes: number;
  likedByMe: boolean;
  isPinned?: boolean;
  unread?: number;
}

export interface ChatRoom {
  roomId: string;
  messages: ChatMessage[];
  isPinned: boolean;
  unread?: number;
}
export interface Message {
  sender: string;
  message: string;
  time?: string;
  roomId: string;
  likes?: number;
  likedByMe?: boolean;
}
