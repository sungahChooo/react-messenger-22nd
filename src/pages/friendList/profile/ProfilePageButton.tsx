import instagramIcon from '@/assets/instagram.svg';
import editIcon from '@/assets/edit.svg';
import profileChatIcon from '@/assets/profileChat.svg';

export default function ProfilePageButton() {
  return (
    <div className="flex w-full items-center justify-center gap-2">
      <button className="bg-light-yellow flex h-[70px] w-[109px] cursor-pointer flex-col items-center justify-center gap-1 rounded-xl p-2 text-[14px] font-normal text-black opacity-70">
        <img src={profileChatIcon} />
        나와의 채팅
      </button>
      <button className="bg-light-yellow flex h-[70px] w-[109px] cursor-pointer flex-col items-center justify-center gap-1 rounded-xl p-2 text-[14px] font-normal text-black opacity-70">
        <img src={editIcon} />
        프로필 편집
      </button>
      <button
        className="bg-light-yellow flex h-[70px] w-[109px] cursor-pointer flex-col items-center justify-center gap-1 rounded-xl p-2 text-[14px] font-normal text-black opacity-70"
        onClick={() =>
          window.open('https://www.instagram.com/hij_eong/?igsh=Z3c0a3ZzcDJodHU4&utm_source=qr#', '_blank')
        }
      >
        <img src={instagramIcon} />
        인스타그램
      </button>
    </div>
  );
}
