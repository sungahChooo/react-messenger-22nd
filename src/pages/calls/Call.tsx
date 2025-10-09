import searchIcon from '@/assets/search.svg';
import Header from '@/components/Header';
import settingIcon from '@/assets/settingHeader.svg';
import Warning from '@/components/warning';
function Call() {
  return (
    <div className="items font-pretendard mx-auto box-border min-h-screen w-full max-w-[375px] bg-white pb-[65px]">
      {/* 상단 헤더 재사용*/}
      <Header
        title="통화"
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
      {/*경고 화면 */}
      <div className="flex h-[550px] flex-col items-center justify-center">
        <Warning />
      </div>
    </div>
  );
}
export default Call;
