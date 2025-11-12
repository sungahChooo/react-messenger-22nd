## 소개
- CEOS 22nd 프론트엔드 디자이너 프론트 협업 과제
- 디자이너는 whats app을 리디자인하고 프론트엔드 개발자는 디자인에 따라 개발
- 디자인 링크: https://www.figma.com/design/Wnk0pj12C3VynpknZ05Gxc/%EC%A0%95%ED%95%B4%EC%9D%B8_%EC%99%93%EC%B8%A0%EC%95%B1-%EB%A6%AC%EB%94%94%EC%9E%90%EC%9D%B8?node-id=116-6955&t=rSS0dSvGjjkW7E07-0
- 디자이너: 정해인
- 프론트엔드 개발: 조성아

## Layout
불필요한 렌더링을 줄이기 위해서 layout 구조를 고민해보았습니다.
App.tsx 내에서 모든 라우트를 <Layout /> 컴포넌트로 감싸, 공통 UI(Navbar, Statusbar 등)를 일관되게 유지하도록 구성했습니다.
Layout은 React Router의 <Outlet />을 통해 하위 페이지를 렌더링하며, 공통 컴포넌트는 상태 변경 시에도 재렌더링되지 않도록 분리하여 성능을 최적화했습니다.

## 기술스택
- React
- Typescript
- Tailwind CSS
- Zustand

## 배포링크
- https://react-messenger-22nd-git-sungahchooo-chosungahs-projects.vercel.app/

## 프로젝트 구조
```bash
src
 ┣ assets
 ┃ ┣ addFriend.svg
 ┃ ┣ banner.svg
 ┃ ┣ battery.svg
 ┃ ┣ before.svg
 ┃  ... //아이콘
 ┣ components
 ┃ ┣ chat
 ┃ ┃ ┣ chatRoom
 ┃ ┃ ┃ ┣ ChatMsgBubble.tsx
 ┃ ┃ ┃ ┣ ChatRoomInput.tsx
 ┃ ┃ ┃ ┗ ChattingRoomHeader.tsx
 ┃ ┃ ┣ ChatBanner.tsx
 ┃ ┃ ┣ ChatListItem.tsx
 ┃ ┃ ┣ ChattingHeader.tsx
 ┃ ┃ ┗ ChattingListImgSection.tsx
 ┃ ┣ friendList
 ┃ ┃ ┣ profile
 ┃ ┃ ┃ ┣ BackgroundLayer.tsx
 ┃ ┃ ┃ ┣ MyProfilePageButton.tsx
 ┃ ┃ ┃ ┣ ProfileBox.tsx
 ┃ ┃ ┃ ┣ ProfilePageButton.tsx
 ┃ ┃ ┃ ┗ XButton.tsx
 ┃ ┃ ┣ FriendListHeader.tsx
 ┃ ┃ ┣ FriendListSection.tsx
 ┃ ┃ ┗ MyProfileSection.tsx
 ┃ ┣ Header.tsx
 ┃ ┣ Navbar.tsx
 ┃ ┣ Statusbar.tsx
 ┃ ┗ warning.tsx
 ┣ data
 ┃ ┣ chat.json
 ┃ ┣ profileImages.ts
 ┃ ┗ user.json
 ┣ layout
 ┃ ┗ Layout.tsx
 ┣ pages
 ┃ ┣ calls
 ┃ ┃ ┗ Call.tsx
 ┃ ┣ chat
 ┃ ┃ ┣ chattingRoom
 ┃ ┃ ┃ ┗ ChattingRoom.tsx
 ┃ ┃ ┗ Chatting.tsx
 ┃ ┣ community
 ┃ ┃ ┗ Community.tsx
 ┃ ┣ friendList
 ┃ ┃ ┣ profile
 ┃ ┃ ┃ ┣ FriendProfile.tsx
 ┃ ┃ ┃ ┗ MyProfile.tsx
 ┃ ┃ ┗ FriendList.tsx
 ┃ ┗ settings
 ┃ ┃ ┣ Setting.tsx
 ┃ ┃ ┗ SettingHeader.tsx
 ┣ stores
 ┃ ┗ chatStore.ts
 ┣ types
 ┃ ┣ chat.ts
 ┃ ┗ user.ts
 ┣ utils
 ┃ ┗ chatUtils.ts
 ┣ App.tsx
 ┣ index.css
 ┣ main.tsx
 ┗ svg.d.ts
```
