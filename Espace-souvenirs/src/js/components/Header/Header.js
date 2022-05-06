import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { modalOpened } from '../../context/modalSlice';

import Banner from './Banner';

const LogoutMenu = React.lazy(() => import(/* webpackChunkName: "LogoutMenu" */'./LogoutMenu'));
const LoginMenu = React.lazy(() => import(/* webpackChunkName: "LoginMenu" */'./LoginMenu'));

export default function Header() {

  const userState = useSelector((state) => state.user);
  const dispatch = useDispatch()
  const handleLogIn = () => {
    dispatch(modalOpened({ theme: 'white', hasCloseButton: false, modalType: "LoginModal" }));
  };

  return (
    <header>
      <Banner />
      {userState.isLogged
        ? <React.Suspense fallback={<p>attendez...</p>}><LogoutMenu/></React.Suspense>
        : (
          <React.Suspense fallback={<p>attendez...</p>}>
            <LoginMenu handleLogIn={handleLogIn} />
          </React.Suspense>
        )}
    </header>
  );
}
