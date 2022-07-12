import { configureStore } from "@reduxjs/toolkit";
import {
  cleanup,
  fireEvent,
  queryByText,
  render,
  waitFor,
} from "@testing-library/react";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import * as util from "util";

import Header from "../components/Header/Header";
import administratorSlice, {
  isAdminSet,
  userLoggedIn,
  userLoggedOut,
} from "../context/administratorSlice";
import biographySlice from "../context/biographySlice";
import globalInfoSlice from "../context/globalInfoSlice";
import messageSlice from "../context/messageSlice";
import modalSlice from "../context/modalSlice";
import Layout from "../layouts/Layout";
import BasePage from "../pages/BasePage";
import useGetQuery from "../services/useGetQuery";

global.TextDecoder = new util.TextDecoder();
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

jest.mock("../services/useGetQuery");

describe("As a user I should see", () => {
  const store = configureStore({
    reducer: {
      globalInfo: globalInfoSlice,
      administrator: administratorSlice,
      messages: messageSlice,
      modal: modalSlice,
      biography: biographySlice,
    },
  });
  const queryClient = new QueryClient();
  window.HTMLElement.prototype.scrollIntoView = jest.fn();
  window.scrollTo = jest.fn();
  afterEach(cleanup);
  afterAll(() => {
    jest.clearAllMocks();
  });

  beforeEach(() => {
    useGetQuery.mockImplementation(() => ({}));
  });
  test("should get Login menu if user logs out", async () => {
    useGetQuery.mockImplementation(() => ({ data: null }));
    const { getByTestId } = render(
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <React.Suspense fallback={<p>attendez...</p>}>
            <MemoryRouter>
              <Header showLogin={true} />
            </MemoryRouter>
          </React.Suspense>
        </Provider>
      </QueryClientProvider>,
    );
    store.dispatch(userLoggedIn());
    store.dispatch(isAdminSet({ isAdmin: true }));
    await waitFor(() => getByTestId("logoutLink"));
    const logoutMenu = getByTestId("logoutLink");
    fireEvent.click(logoutMenu);
    store.dispatch(userLoggedOut());
    await waitFor(() => expect(getByTestId("loginMenu")).toBeTruthy());
  });
  test("should have logout menu if user connected", async () => {
    useGetQuery.mockImplementation(() => ({ data: null }));
    const { getByTestId, getByText } = render(
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <React.Suspense fallback={<p>attendez...</p>}>
            <MemoryRouter>
              <Header showLogin={true} />
            </MemoryRouter>
          </React.Suspense>
        </Provider>
      </QueryClientProvider>,
    );
    store.dispatch(userLoggedIn());
    store.dispatch(isAdminSet({ isAdmin: true }));
    await waitFor(() => getByTestId("logoutButton"));
    const loginMenu = getByText(/Se déconnecter/i);
    expect(loginMenu).toBeTruthy();
  });

  test("h1 of a page that comes from Drupal", async () => {
    const data = {
      body: "<h1>Hello this is base page</h1>",
      publish: true,
    };
    useGetQuery.mockImplementation(() => ({ data }));
    const { queryByText } = render(
      <Provider store={store}>
        <MemoryRouter>
          <BasePage />
        </MemoryRouter>
      </Provider>,
    );

    await waitFor(() =>
      expect(queryByText("Hello this is base page")).toBeTruthy(),
    );
  });
});
