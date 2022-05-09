import React, { useMemo } from "react";
import { render, fireEvent, waitFor, cleanup } from "@testing-library/react";
import { renderedLoggedOutMain } from "./renderedPages";

import MessagesList from "../components/Messages/MessagesList";
import useGetQuery from "../services/useGetQuery";
import "@testing-library/jest-dom";
import { renderHook } from "@testing-library/react-hooks";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import userSlice from "../context/userSlice";
import messageSlice from "../context/messageSlice";
import modalSlice from "../context/modalSlice";
import biographySlice from "../context/biographySlice";
import { isAdminSet, userLoggedIn } from "../context/userSlice";
import MessageItem from "../components/Messages/MessageItem";
import ContentWrapper from "../components/ContentWrapper/ContentWrapper";
import MainPage from "../pages/MainPage";
import { MemoryRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import {
  initialEmptyState,
  receievedFakeAgency,
  receivedEmptyData,
  receivedNoDatesData,
  unpublishedMessage,
} from "./constants";

jest.mock("../services/useGetQuery");
describe("On the main page", () => {
  afterEach(cleanup);

  afterEach(() => {
    jest.clearAllMocks();
    useGetQuery.mockRestore();
  });
  const queryClient = new QueryClient();

  window.HTMLElement.prototype.scrollIntoView = jest.fn();
  const store = configureStore({
    reducer: {
      user: userSlice,
      messages: messageSlice,
      modal: modalSlice,
      biography: biographySlice,
    },
  });

  test("Should not have edit hero banner button", async () => {
    useGetQuery.mockImplementation(() => ({ data: initialEmptyState }));
    const { getByTestId, queryByTestId } = render(renderedLoggedOutMain);
    await waitFor(() => getByTestId("loginMenu"));
    expect(queryByTestId("heroBannerEdit")).toBeFalsy();
  });
  test("Should not have defunt picture edit button", async () => {
    useGetQuery.mockImplementation(() => ({ data: initialEmptyState }));
    const { getByTestId, queryByTestId } = render(renderedLoggedOutMain);
    await waitFor(() => getByTestId("loginMenu"));
    expect(queryByTestId("defuntImageEdit")).toBeFalsy();
  });
  /*   test.only("Should have edit hero banner button", async () => {
    
    useGetQuery.mockImplementation(() => ({data: initialEmptyState}));

    store.dispatch(userLoggedIn());
    store.dispatch(isAdminSet({isAdmin:true}))
    const { queryByTestId, getByTestId } = render(renderedLoggedOutMain) 

    await waitFor(() => getByTestId('logoutButton')) 
    expect(queryByTestId("heroBannerEdit")).toBeTruthy();
  });  */
  test("Should have defunt picture edit button if admin and connected", async () => {
    store.dispatch(userLoggedIn());
    store.dispatch(isAdminSet({ isAdmin: true }));
    useGetQuery.mockImplementation(() => ({ data: initialEmptyState }));
    const { queryByTestId } = render(<QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <React.Suspense fallback={<p>attendez...</p>}>
          <MemoryRouter>
            <MainPage />
          </MemoryRouter>
        </React.Suspense>
      </Provider>
    </QueryClientProvider>,);
    await waitFor(() => expect(queryByTestId("defuntImageEdit")).toBeTruthy());
  });
  test("Should have administrators edit button", async () => {
    useGetQuery.mockImplementation(() => ({ data: initialEmptyState }));
    store.dispatch(userLoggedIn());
    store.dispatch(isAdminSet({ isAdmin: true }));
    const { queryByTestId, getByTestId } = render(<QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <React.Suspense fallback={<p>attendez...</p>}>
          <MemoryRouter>
            <MainPage />
          </MemoryRouter>
        </React.Suspense>
      </Provider>
    </QueryClientProvider>,);
    await waitFor(() => getByTestId("logoutButton"));
    expect(queryByTestId("administratorsEdit")).toBeTruthy();
  });
  test("Should not see Prestation if empty data", async () => {
    useGetQuery.mockImplementation(() => ({ data: initialEmptyState }));
    const { queryByTestId } = render(<QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <React.Suspense fallback={<p>attendez...</p>}>
          <MemoryRouter>
            <MainPage />
          </MemoryRouter>
        </React.Suspense>
      </Provider>
    </QueryClientProvider>,);

    await waitFor(() => expect(queryByTestId("transversalBlocks")).toBeFalsy());
  });
  test("should see defunt firstname and lastname", async () => {
    useGetQuery.mockImplementation(() => ({ data: initialEmptyState }));
    const { getByTestId } = render(<QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <React.Suspense fallback={<p>attendez...</p>}>
          <MemoryRouter>
            <MainPage />
          </MemoryRouter>
        </React.Suspense>
      </Provider>
    </QueryClientProvider>,);

    await waitFor(() => getByTestId("defuntInfosWrapper"));
    expect(getByTestId("defuntName")).toHaveTextContent("Mme Marie DUBOIS");
    expect(getByTestId("defuntBirthdate")).toHaveTextContent("1937");
    expect(getByTestId("defuntDeathdate")).toHaveTextContent("2022");
  });
  test("should not have NaN if no dates", async () => {
    useGetQuery.mockImplementation(() => ({ data: receivedNoDatesData }));
    const { getByTestId } = render(<Provider store={store}>
      <React.Suspense fallback={<p>attendez...</p>}>
        <MemoryRouter>
          <MainPage />
        </MemoryRouter>
      </React.Suspense>
    </Provider>,);
    expect(getByTestId("defuntBirthdate")).not.toHaveTextContent("NaN");
    expect(getByTestId("defuntDeathdate")).toHaveTextContent("");
  });
  test("should see 404 error page if no Espace Souvenirs data", async () => {
    useGetQuery.mockImplementation(() => ({ data: receivedEmptyData }));
    const { result } = renderHook(() => useGetQuery());
    await waitFor(() => result.current.data);

    const { getByText } = render(<Provider store={store}>
      <MemoryRouter>
        <MainPage />
      </MemoryRouter>
    </Provider>,);

    expect(getByText("Page introuvable (404)")).toBeTruthy();
  });
  test("should see Rendre Hommage bloc if connected", async () => {
    useGetQuery.mockImplementation(() => ({ data: initialEmptyState }));
    store.dispatch(userLoggedIn());
    store.dispatch(isAdminSet({ isAdmin: true }));
    const { getByTestId, queryByTestId } = render(<Provider store={store}>
      <MemoryRouter>
        <MainPage />
      </MemoryRouter>
    </Provider>,);
    await waitFor(() => getByTestId("logoutButton"));
    expect(queryByTestId("homage")).toBeTruthy();
  });
  test("should see add a message button if click on message tab", async () => {
    useGetQuery.mockImplementation(() => ({ data: initialEmptyState }));
    const { getByText, getByTestId } = render(<Provider store={store}>
      <MemoryRouter>
        <MainPage />
      </MemoryRouter>
    </Provider>,);
    await waitFor(() => getByTestId("messages"));
    fireEvent.click(document.getElementById("messages"));
    await waitFor(() => getByText("Ecrire un message"));
    const writeAMessageButton = getByText("Ecrire un message");
    expect(writeAMessageButton).toBeTruthy();
  });
  /*   test("should not see messages list if there are no messages", async() => {
    useGetQuery.mockImplementation(() => ({data:initialEmptyState}));
    const { result } = renderHook(() => useGetQuery())
    await waitFor(() => result.current.data)
    const { getByTestId, debug } = render(<Provider store={store}>
      <MemoryRouter>
        <MessagesList />
      </MemoryRouter>
    </Provider>) 
    debug()
    expect(getByTestId("emptyMessageList")).toBeTruthy();
  });  */
  test("should see messages list if there are messages", async () => {
    useGetQuery.mockImplementation(() => ({ data: initialEmptyState }));
    const { getByTestId, getAllByText } = render(<Provider store={store}>
      <MemoryRouter>
        <MessagesList />
      </MemoryRouter>
    </Provider>,);

    expect(getByTestId("messagesList").childNodes.length).toBeGreaterThan(0);
    expect(getAllByText("Ecrit par Elise Dupont")).toBeTruthy();
  });
  test("should publish unpublished message if click on switch (admin user)", async () => {
    useGetQuery.mockImplementation(() => ({ data: initialEmptyState }));
    store.dispatch(userLoggedIn());
    store.dispatch(isAdminSet({ isAdmin: true }));
    const { getByText, getAllByTestId } = render(<Provider store={store}>
      <MemoryRouter>
        <MessageItem message={unpublishedMessage} />
      </MemoryRouter>
    </Provider>,);
    const checkInput = getAllByTestId("switchCheck")[0];
    fireEvent.click(checkInput);
    await waitFor(() => expect(getByText("Publié")).toBeTruthy());
  });
  /*   test("should see only published messages in list if there are messages (disconnected user)", async () => {
    useGetQuery.mockImplementation(() => ({data:initialEmptyState}));
    const { result } = renderHook(() => useGetQuery())
    await waitFor(() => result.current.data)
    const { getByTestId, getAllByText } = render(<Provider store={store}>
      <MemoryRouter>
        <MessagesList />
      </MemoryRouter>
    </Provider>) 
    expect(getByTestId("messagesList").childNodes.length).toEqual(1);
  });  */
  test("should have the author, date and message body if there are messages", async () => {
    useGetQuery.mockImplementation(() => ({ data: initialEmptyState }));
    const { getByTestId, getAllByText } = render(<Provider store={store}>
      <MemoryRouter>
        <MessagesList />
      </MemoryRouter>
    </Provider>,);
    expect(getByTestId("messagesList").childNodes.length).toBeGreaterThan(0);
    expect(getAllByText("Ecrit par Elise Dupont")).toBeTruthy();
    expect(getAllByText("Aenean porta tincidunt finibus.")).toBeTruthy();
    expect(getAllByText("Le 11 janvier 2021 à 01h00")).toBeTruthy();
  });
  test("should see biography default text (connected user)", async () => {
    useGetQuery.mockImplementation(() => ({ data: initialEmptyState }));
    store.dispatch(userLoggedIn());
    store.dispatch(isAdminSet({ isAdmin: true }));
    const { getByTestId } = render(<QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <MemoryRouter>
          <MainPage />
        </MemoryRouter>
      </Provider>
    </QueryClientProvider>,);
    fireEvent.click(getByTestId("biographie"));
    await waitFor(() => expect(getByTestId("biographyText")).toBeTruthy());
  });
  test("should not see biography default text (logged out user)", async () => {
    useGetQuery.mockImplementation(() => ({ data: initialEmptyState }));
    const { queryByTestId } = render(<QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <MemoryRouter>
          <ContentWrapper />
        </MemoryRouter>
      </Provider>
    </QueryClientProvider>,);
    expect(queryByTestId("biography")).toBeFalsy();
  });
  test("should not see agency telephone nor link if no agency phone or link", async () => {
    useGetQuery.mockImplementation(() => ({ data: receievedFakeAgency }));
    const { getByTestId, queryByTestId, debug } = render(<Provider store={store}>
      <MemoryRouter>
        <MainPage />
      </MemoryRouter>
    </Provider>,);
    await waitFor(() => getByTestId("agencyWrapper"));
    expect(queryByTestId("agencyPhone")).toBeFalsy();
    expect(queryByTestId("agencyCta")).toBeFalsy();
  });

  test("should see agency telephone and link if agency has phone or link", async () => {
    const dataWithPhoneLink = {
      ...receievedFakeAgency,
      field_es_agency: {
        agency_phone: "010101",
        agency_url: "https://pfg.fr",
      },
    };
    useGetQuery.mockImplementation(() => ({ data: dataWithPhoneLink }));
    const { getByTestId, queryByTestId } = render(<Provider store={store}>
      <MemoryRouter>
        <MainPage />
      </MemoryRouter>
    </Provider>,);
    await waitFor(() => getByTestId("agencyWrapper"));
    expect(queryByTestId("agencyPhone")).toBeTruthy();
    expect(queryByTestId("agencyCta")).toBeTruthy();
  });

  test("should see message form if click on Add New Message btn", async () => {
    useGetQuery.mockImplementation(() => ({ data: initialEmptyState }));
    const { getByTestId, getByText } = render(<Provider store={store}>
      <MemoryRouter>
        <MainPage />
      </MemoryRouter>
    </Provider>,);
    await waitFor(() => getByTestId("messages"));
    fireEvent.click(document.getElementById("messages"));
    await waitFor(() => getByText("Ecrire un message"));
    fireEvent.click(getByText("Ecrire un message"));
    await waitFor(() => getByTestId("messagesForm"));
    const writeAMessageForm = getByTestId("messagesForm");
    expect(writeAMessageForm).toBeTruthy();
  });
});
