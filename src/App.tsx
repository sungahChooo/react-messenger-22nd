import Call from '@/pages/calls/Call';
import Chatting from './pages/chat/Chatting';
import Community from '@/pages/community/Community';
import FriendList from '@/pages/friendList/FriendList';
import Setting from '@/pages/settings/Setting';
import NavBar from '@/components/Navbar';
import ChattingRoom from '@/pages/chat/chattingRoom/ChattingRoom';

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Profile from '@/pages/friendList/profile/MyProfile';
import Statusbar from '@/components/Statusbar';
import FriendProfile from '@/pages/friendList/profile/FriendProfile';
import DefaultLayout from '@/layout/Layout';

function AppLayout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const hideSidebarPaths = ['/chattingroom', '/profile']; // 숨기고 싶은 페이지 경로
  const showNavbar = !hideSidebarPaths.some((path) => location.pathname.startsWith(path)); //pathname이 /myprofile/123 이런식이어도 적용됨
  const isChatRoom = location.pathname.startsWith('/chattingroom');
  const isProfile = location.pathname.startsWith('/profile');

  return (
    <div className="relative">
      <Statusbar isChatRoom={isChatRoom} isProfile={isProfile} />
      {showNavbar && <NavBar />}
      <div className="min-h-screen">{children}</div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppLayout>
        <Routes>
          <Route element={<DefaultLayout />} />
          <Route path="/" element={<FriendList />} />
          <Route path="/friendList" element={<FriendList />} />
          <Route path="/chat" element={<Chatting />} />
          <Route path="/community" element={<Community />} />
          <Route path="/call" element={<Call />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/chattingroom/:roomId" element={<ChattingRoom />} />
          <Route path="/profile/me" element={<Profile />} />
          <Route path="/profile/:id" element={<FriendProfile />} />
        </Routes>
      </AppLayout>
    </Router>
  );
}
