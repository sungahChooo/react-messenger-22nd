import Header from '@/components/Header';
import searchIcon from '@/assets/search.svg';
import settingIcon from '@/assets/settingHeader.svg';

export default function settingHeader() {
  return (
    <Header
      title="설정"
      right={
        <div className="flex cursor-pointer gap-4">
          <button onClick={() => alert('준비중입니다.')}>
            <img src={searchIcon} alt="search" />
          </button>
          <button>
            <img src={settingIcon} alt="camera" />
          </button>
        </div>
      }
    />
  );
}
