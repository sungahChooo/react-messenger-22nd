import Warning from '@/components/warning';
import SettingHeader from './SettingHeader';

function Setting() {
  return (
    <div className="items absolute top-0 left-1/2 z-800 min-h-screen w-full max-w-[375px] -translate-x-1/2 bg-white pb-[65px]">
      <SettingHeader />
      {/*경고 화면 */}
      <div className="flex h-[550px] flex-col items-center justify-center">
        <Warning />
      </div>
    </div>
  );
}
export default Setting;
