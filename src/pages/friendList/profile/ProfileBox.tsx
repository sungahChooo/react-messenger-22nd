import profileImage from '@/assets/profile.svg';

export default function ProfileBox() {
  return (
    <div className="mb-4 flex flex-col justify-center gap-4">
      <img src={profileImage} alt="profile" className="h-[123px] w-[123px] rounded-full" />
      <p className="flex flex-col items-center gap-1">
        <span className="text-2xl font-semibold text-white">정해인</span>
        <span className="text-base font-normal text-white">010 8992 0743</span>
      </p>
    </div>
  );
}
