import { configureStore } from "@reduxjs/toolkit";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider, useDispatch, useSelector } from "react-redux";
import { MemoryRouter } from "react-router-dom";

import Footer from "../components/Footer/Footer";
import Landing from "../pages/Landing.js";
import MainPage from "../pages/MainPage";
import administratorSlice from "../providers/administratorSlice";
import globalInfoSlice from "../providers/globalInfoSlice";
import messageSlice from "../providers/messageSlice";
import modalSlice from "../providers/modalSlice";

/* const dispatch = useDispatch(); */

window.scrollTo = jest.fn();

/* jest.mock('react-redux', () => ({
  connect: () => jest.fn(),
  useDispatch: () => {},
  useSelector: () => ({
    state: {
      user: globalInfoState,
      modal: modalState,
      messages:messagesState
    },
  }),
}));  */
const store = configureStore({
  reducer: {
    globalInfo: globalInfoSlice,
    administrator: administratorSlice,
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
