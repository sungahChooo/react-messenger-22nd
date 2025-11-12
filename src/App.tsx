import Call from '@/pages/calls/Call';
import Chatting from './pages/chat/Chatting';
import Community from '@/pages/community/Community';
import FriendList from '@/pages/friendList/FriendList';
import Setting from '@/pages/settings/Setting';
import ChattingRoom from '@/pages/chat/chattingRoom/ChattingRoom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from '@/pages/friendList/profile/MyProfile';
import FriendProfile from '@/pages/friendList/profile/FriendProfile';
import Layout from '@/layout/Layout';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<FriendList />} />
          <Route path="/friendList" element={<FriendList />} />
          <Route path="/chat" element={<Chatting />} />
          <Route path="/community" element={<Community />} />
          <Route path="/call" element={<Call />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/chattingroom/:roomId" element={<ChattingRoom />} />
          <Route path="/profile/me" element={<Profile />} />
          <Route path="/profile/:id" element={<FriendProfile />} />
        </Route>
      </Routes>
    </Router>
  );
}
