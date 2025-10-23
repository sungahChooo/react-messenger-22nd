import ProfilePageButton from './ProfilePageButton';
import ProfileBox from './ProfileBox';
import XButton from './XButton';

export default function Profile() {
  return (
    <div className="font-pretendard mx-auto flex min-h-screen w-full max-w-[375px] flex-col place-content-between">
      <div className="absolute inset-0 z-0 mx-auto flex min-h-screen w-full max-w-[375px] bg-[url('/backgroundImage.jpg')] bg-cover opacity-70"></div>

      <XButton />
      <div className="relative z-0 mb-8 flex flex-col items-center">
        <ProfileBox />
        <ProfilePageButton />
      </div>
    </div>
  );
}
