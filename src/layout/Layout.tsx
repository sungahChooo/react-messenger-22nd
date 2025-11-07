import Navbar from '@/components/Navbar';
import { Outlet } from 'react-router-dom';

function DefaultLayout() {
  return (
    <>
      <main>
        <Outlet />
      </main>
      <Navbar />
    </>
  );
}

export default DefaultLayout;
