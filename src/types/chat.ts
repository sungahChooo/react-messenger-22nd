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
  participants: string[]; //단채채팅방 만들기 위해 추가함
  messages: ChatMessage[];
  isPinned: boolean;
  unread?: number;
}
