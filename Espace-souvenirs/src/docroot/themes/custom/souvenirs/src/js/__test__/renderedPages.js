import React from "react";
import Footer from "../components/Footer/Footer";
import Landing from "../pages/Landing.js";
import MainPage from "../pages/MainPage";
import { useSelector, useDispatch } from "react-redux";
import userSlice from "../context/userSlice";
import messageSlice from "../context/messageSlice";
import modalSlice from "../context/modalSlice";
import { configureStore } from "@reduxjs/toolkit";
/* import { store } from '../store/store'; */
import { Provider } from "react-redux";

import { MemoryRouter } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "react-query";

/* const dispatch = useDispatch(); */

window.scrollTo = jest.fn();

/* jest.mock('react-redux', () => ({
  connect: () => jest.fn(),
  useDispatch: () => {},
  useSelector: () => ({
    state: {
      user: userState,
      modal: modalState,
      messages:messagesState
    },
  }),
}));  */
const store = configureStore({
  reducer: {
    user: userSlice,
    messages: messageSlice,
    modal: modalSlice,
  },
});

const queryClient = new QueryClient();
const LoginMenu = React.lazy(() => import("../components/Header/LoginMenu"));
const Modal = React.lazy(() => import("../components/Modal/Modal"));

export const renderedLoggedOutLanding = (
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <React.Suspense fallback={<p>attendez...</p>}>
        <MemoryRouter>
          <Landing></Landing>
        </MemoryRouter>
      </React.Suspense>
    </Provider>
  </QueryClientProvider>
);
export const renderedLoggedInLanding = (
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <React.Suspense fallback={<p>attendez...</p>}>
        <MemoryRouter>
          <Landing></Landing>
        </MemoryRouter>
      </React.Suspense>
    </Provider>
  </QueryClientProvider>
);
export const renderedLoggedOutMain = (
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <React.Suspense fallback={<p>attendez...</p>}>
        <MemoryRouter>
          <MainPage />
        </MemoryRouter>
      </React.Suspense>
    </Provider>
  </QueryClientProvider>
);
