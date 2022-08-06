import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import FullPageLoader from "../components/Loader/FullPageLoader";

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
const ResetPassword = React.lazy(() =>
  import(/* webpackChunkName: "ResetPassword" */ "../pages/ResetPassword"),
);

const NoMatch = React.lazy(() =>
  import(/* webpackChunkName: "NoMatch" */ "../pages/NoMatch"),
);
const BasePage = React.lazy(() =>
  import(/* webpackChunkName: "BasePage" */ "../pages/BasePage"),
);

export default function RouterComponent() {
  const administratorState = useSelector((state) => state.administrator);
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
          path="mon-espace"
          exact
          element={
            <React.Suspense fallback={<FullPageLoader />}>
              <Landing />
            </React.Suspense>
          }
        />
        <Route
          path="node/1"
          exact
          element={
            <React.Suspense fallback={<FullPageLoader />}>
              {administratorState.isAdmin ? <Landing /> : <NoMatch />}
            </React.Suspense>
          }
        />
        <Route
          path="mon-espace/:espaceId"
          element={
            <React.Suspense fallback={<FullPageLoader />}>
              <MainPage />
            </React.Suspense>
          }
        />
        {/*         <Route
          path="mentions-legales"
          element={
            <React.Suspense fallback={<FullPageLoader />}>
              <LegalNotice />
            </React.Suspense>
          }
        /> */}
        <Route
          path="reset-password"
          element={
            <React.Suspense fallback={<FullPageLoader />}>
              <ResetPassword />
            </React.Suspense>
          }
        />
        <Route
          path="user/login"
          exact
          element={
            <React.Suspense fallback={<FullPageLoader />}>
              {!administratorState.isLogged ? (
                <UserLogin />
              ) : (
                <Navigate replace to="/" />
              )}
            </React.Suspense>
          }
        />
        <Route
          path="*"
          element={
            <React.Suspense fallback={<FullPageLoader />}>
              <BasePage />
            </React.Suspense>
          }
        />
        <Route
          path="contact"
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
