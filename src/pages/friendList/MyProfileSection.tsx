import profile from '@/assets/profile.svg';
import { useNavigate } from 'react-router-dom';

function MyProfileSection() {
  const navigate = useNavigate();
  return (
    <section
      className="my-4 mt-13 flex cursor-pointer items-center gap-2 px-4"
      onClick={() => {
        navigate('/profile/me');
      }}
    >
      <img src={profile} alt="프로필 이미지" className="h-[65px] w-[65px]" />
      <div>
        <div className="text-2xl font-semibold">정해인</div>
        <div className="text-sm font-medium text-gray-500">상태메시지 있는 경우입니다.</div>
      </div>
    </section>
  );
}
export default MyProfileSection;
