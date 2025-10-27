import ProfilePageButton from '../../../components/friendList/profile/ProfilePageButton';
import XButton from '../../../components/friendList/profile/XButton';
import BackgroundLayer from '../../../components/friendList/profile/BackgroundLayer';
import editIcon from '@/assets/edit.svg';
import profileChatIcon from '@/assets/profileChat.svg';
import instagramIcon from '@/assets/instagram.svg';
import profileImage from '@/assets/profile.svg';
import ProfileCard from '../../../components/friendList/profile/ProfileBox';

const myButtons = [
  { icon: profileChatIcon, label: '나와의 채팅', onClick: () => alert('채팅 준비중') },
  { icon: editIcon, label: '프로필 편집', onClick: () => alert('편집 준비중') },
  {
    icon: instagramIcon,
    label: '인스타그램',
    onClick: () => window.open('https://www.instagram.com/hij_eong/?igsh=Z3c0a3ZzcDJodHU4&utm_source=qr#', '_blank'),
  },
];
export default function MyProfile() {
  return (
    <div className="font-pretendard mx-auto flex min-h-screen w-full max-w-[375px] flex-col place-content-between">
      <BackgroundLayer imageUrl="/backgroundImage.jpg" opacity={0.7} />
      <XButton />
      <div className="relative z-0 mb-8 flex flex-col items-center">
        <ProfileCard name="정해인" number="010 8992 0743" profileImage={profileImage} />
        <ProfilePageButton buttons={myButtons} />
      </div>
    </div>
  );
}
