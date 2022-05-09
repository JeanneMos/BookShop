import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import FullPageLoader from "../components/Loader/FullPageLoader";
import { useSelector } from "react-redux";

const Landing = React.lazy(() =>
  import(/* webpackChunkName: "Landing" */ "../pages/Landing"),
);
const MainPage = React.lazy(() =>
  import(/* webpackChunkName: "MainPage" */ "../pages/MainPage"),
);
const LegalNotice = React.lazy(() =>
  import(/* webpackChunkName: "LegalNotice" */ "../pages/LegalNotice"),
);
const UserLogin = React.lazy(() =>
  import(/* webpackChunkName: "UserLogin" */ "../pages/UserLogin"),
);

const NoMatch = React.lazy(() =>
  import(/* webpackChunkName: "NoMatch" */ "../pages/NoMatch"),
);

export default function RouterComponent() {
  const userState = useSelector((state) => state.user);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          exact
          element={
            <React.Suspense fallback={<FullPageLoader />}>
              <Landing />
            </React.Suspense>
          }
        />
        <Route
          path="/node/1"
          exact
          element={
            <React.Suspense fallback={<FullPageLoader />}>
              <Landing />
            </React.Suspense>
          }
        />
        <Route
          path="main-page/:espaceId"
          element={
            <React.Suspense fallback={<FullPageLoader />}>
              <MainPage />
            </React.Suspense>
          }
        />
        <Route
          path="mentions-legales"
          element={
            <React.Suspense fallback={<FullPageLoader />}>
              <LegalNotice />
            </React.Suspense>
          }
        />
        <Route
          path="user/login"
          exact
          element={
            <React.Suspense fallback={<FullPageLoader />}>
              {!userState.isLogged ? (
                <UserLogin />
              ) : (
                <Navigate replace to="/" />
              )}
            </React.Suspense>
          }
        />
        {/*         <Route
          path="user/:id"
          element={
            <React.Suspense fallback={<FullPageLoader />}>{userState.isLogged ? <UserPage /> : <Navigate replace to="/" />}</React.Suspense>
          }
        /> */}
        <Route
          path="/contact"
          element={
            <React.Suspense fallback={<FullPageLoader />}>
              <NoMatch />
            </React.Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
