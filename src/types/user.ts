export interface User {
  id: string; // 고유 ID
  name: string; // 이름
  profileImage?: string; // 프로필 사진 URL
  statusMessage?: string; // 상태 메시지
  number?: string; // 전화번호
}
