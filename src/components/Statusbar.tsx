import { useEffect, useState } from 'react';
import batteryIcon from '@/assets/battery.svg';
import wifiIcon from '@/assets/wifi.svg';
import dataIcon from '@/assets/data.svg';

function Statusbar() {
  const [currentTime, setCurrentTime] = useState('');
  const getTime = () => {
    // 메시지 보낼때마다 현재 시간 가져오기
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const formattedHour = hours % 12 === 0 ? 12 : hours % 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${formattedHour}:${formattedMinutes}`; // 예: 3:05형태
  };

  useEffect(() => {
    // 처음 렌더링 시 현재 시간 설정
    setCurrentTime(getTime());

    // 1분마다 시간 업데이트
    const timer = setInterval(() => {
      setCurrentTime(getTime());
    }, 60000);

    // 컴포넌트 언마운트 시 interval 해제
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="font-pretendard abolute fixed left-1/2 z-900 flex h-[49px] w-[375px] -translate-x-1/2 flex-row items-center justify-between bg-transparent px-4">
      <span className="text-[15px] font-bold">{currentTime}</span>
      <div className="flex flex-row items-center gap-2">
        <img src={dataIcon} className="h-[11px] w-[18px]" />
        <img src={wifiIcon} className="h-[11px] w-[18px]" />
        <img src={batteryIcon} className="h-[11px] w-[18px]" />
      </div>
    </div>
  );
}
export default Statusbar;
