## 소개
- CEOS 22nd 프론트엔드 디자이너 프론트 협업 과제
- 디자이너는 whats app을 리디자인하고 프론트엔드 개발자는 디자인에 따라 개발
- 디자인 링크: https://www.figma.com/design/Wnk0pj12C3VynpknZ05Gxc/%EC%A0%95%ED%95%B4%EC%9D%B8_%EC%99%93%EC%B8%A0%EC%95%B1-%EB%A6%AC%EB%94%94%EC%9E%90%EC%9D%B8?node-id=116-6955&t=rSS0dSvGjjkW7E07-0
- 디자이너: 정해인
- 프론트엔드 개발: 조성아

## 기술스택
- React
- Typescript
- Tailwind CSS

## 배포링크
- https://react-messenger-22nd-git-sungahchooo-chosungahs-projects.vercel.app/

## 프로젝트 구조
src/
 ├─ App.tsx                
 ├─ layout/
 │   └─ Layout.tsx       
 ├─ components/
 │   ├─ Navbar.tsx
 │   └─ Statusbar.tsx
 ├─ stores/
 │   └─ chatStore.ts
 ├─ types
 │    ├─ chat.ts
 │    └─ user.ts
 ├─ utils/
 │   └─ chatUtils.ts
 └─ pages/
     ├─ chat/
     │   ├─ Chatting.tsx
     │   └─ chattingRoom/ChattingRoom.tsx
     ├─ friendList/
     │   ├─ FriendList.tsx
     │   └─ profile/
     │        ├─ MyProfile.tsx
     │        └─ FriendProfile.tsx
     └─ ...
