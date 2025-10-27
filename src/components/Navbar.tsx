import FriendIcon from '@/assets/friend.svg?react';
import ChatIcon from '@/assets/chatIcon.svg?react';
import CommunityIcon from '@/assets/community.svg?react';
import CallIcon from '@/assets/call.svg?react';
import SettingsIcon from '@/assets/setting.svg?react';

import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const { pathname } = useLocation();

  return (
    <nav className="border-light-gray space-between fixed bottom-0 left-1/2 z-900 flex h-[65px] w-full max-w-[375px] -translate-x-1/2 items-center justify-around border-t bg-white">
      <div className="flex w-[46px] flex-col items-center justify-center border-0 bg-transparent">
        <Link to="/friendList">
          <FriendIcon
            className={`h-[24px] w-[24px] ${pathname === '/friendList' || pathname === '/' ? 'text-black' : 'text-gray-400'}`}
          />

          <span
            className={
              `font-pretendard text-center text-[12px] leading-[140%] font-semibold tracking-normal ` +
              (pathname === '/friendList' || pathname === '/' ? 'text-black' : 'text-gray-400')
            }
          >
            친구
          </span>
        </Link>
      </div>
      <div className="flex w-[46px] cursor-pointer flex-col items-center justify-center border-0 bg-transparent">
        <Link to="/chat" className={pathname === '/chat' ? 'text-black' : 'text-light-gray'}>
          <ChatIcon className={`h-[24px] w-[24px] ${pathname === '/chat' ? 'text-black' : 'text-gray-400'}`} />
          <span
            className={
              `font-pretendard text-center text-[12px] leading-[140%] font-semibold tracking-normal ` +
              (pathname === '/chat' ? 'text-black' : 'text-gray-400')
            }
          >
            채팅
          </span>
        </Link>
      </div>
      <div className="flex w-[46px] cursor-pointer justify-center border-0 bg-transparent">
        <Link to="/community" className="flex flex-col items-center justify-center gap-2">
          <CommunityIcon
            className={`h-[24px] w-[24px] ${pathname === '/community' ? 'text-black' : 'text-gray-400'}`}
          />
          <span
            className={
              `font-pretendard flex justify-center text-center text-[12px] leading-[140%] font-semibold tracking-normal ` +
              (pathname === '/community' ? 'text-black' : 'text-gray-400')
            }
          >
            커뮤니티
          </span>
        </Link>
      </div>
      <div className="flex w-[46px] cursor-pointer flex-col items-center justify-center border-0 bg-transparent">
        <Link to="/call">
          <CallIcon className={`h-[24px] w-[24px] ${pathname === '/call' ? 'text-black' : 'text-gray-400'}`} />
          <span
            className={
              `font-pretendard text-center text-[12px] leading-[140%] font-semibold tracking-normal ` +
              (pathname === '/call' ? 'text-black' : 'text-gray-400')
            }
          >
            통화
          </span>
        </Link>
      </div>
      <div className="flex w-[46px] cursor-pointer flex-col items-center justify-center border-0 bg-transparent">
        <Link to="/setting">
          <SettingsIcon className={`h-[24px] w-[24px] ${pathname === '/setting' ? 'text-black' : 'text-gray-400'}`} />
          <span
            className={
              `font-pretendard text-center text-[12px] leading-[140%] font-semibold tracking-normal ` +
              (pathname === '/setting' ? 'text-black' : 'text-gray-400')
            }
          >
            설정
          </span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
