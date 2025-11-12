import Navbar from '@/components/Navbar';
import Statusbar from '@/components/Statusbar';
import { Outlet, useLocation } from 'react-router-dom';

function Layout() {
  const location = useLocation();
  const hideSidebarPaths = ['/chattingroom', '/profile']; // 숨기고 싶은 페이지 경로
  const showNavbar = !hideSidebarPaths.some((path) => location.pathname.startsWith(path)); //pathname이 /myprofile/123 이런식이어도 적용됨
  const isChatRoom = location.pathname.startsWith('/chattingroom');
  const isProfile = location.pathname.startsWith('/profile');
  return (
    <>
      <Statusbar isChatRoom={isChatRoom} isProfile={isProfile} />
      <main>
        <Outlet />
      </main>
      {showNavbar && <Navbar />}
    </>
  );
}
export default Layout;
