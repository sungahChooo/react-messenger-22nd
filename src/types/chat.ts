export interface ChatMessage {
  roomId: string;
  sender: number;
  message: string;
  time: string;
  likes: number;
  likedByMe: boolean;
  date: string;
}

export interface ChatRoom {
  roomId: string;
  participants: number[]; //단채채팅방 만들기 위해 추가함
  lastMessage: string;
  messages: ChatMessage[];
  isPinned: boolean;
  unread?: number;
}
