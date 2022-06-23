import "@testing-library/jest-dom";

import { configureStore } from "@reduxjs/toolkit";
import { cleanup, fireEvent, render, waitFor } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import React, { useMemo } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";

import ContentWrapper from "../components/ContentWrapper/ContentWrapper";
import MessageItem from "../components/Messages/MessageItem";
import MessagesList from "../components/Messages/MessagesList";
import administratorSlice, {
  currentUserSet,
  isAdminSet,
  userLoggedIn,
} from "../context/administratorSlice";
import biographySlice from "../context/biographySlice";
import globalInfoSlice from "../context/globalInfoSlice";
import messageSlice from "../context/messageSlice";
import modalSlice from "../context/modalSlice";
import MainPage from "../pages/MainPage";
import useGetQuery from "../services/useGetQuery";
import usePostQuery from "../services/usePostQuery";
import {
  currentUser,
  emptyMessages,
  initialglobalInfoState,
  manyMessages,
  messages,
  receievedFakeAgency,
  receivedEmptyData,
  receivedNoDatesData,
  unpublishedMessage,
} from "./constants";
import { renderedLoggedOutMain } from "./renderedPages";

jest.mock("../services/useGetQuery");
jest.mock("../services/usePostQuery");
describe("On the main page", () => {
  afterEach(cleanup);

  afterEach(() => {
    jest.clearAllMocks();
    useGetQuery.mockRestore();
    usePostQuery.mockRestore();
  });
  beforeEach(() => {
    usePostQuery.mockImplementation(() => ({ mutate: jest.fn() }));
  });
  const queryClient = new QueryClient();

  window.HTMLElement.prototype.scrollIntoView = jest.fn();
  const store = configureStore({
    reducer: {
      globalInfo: globalInfoSlice,
      administrator: administratorSlice,
      messages: messageSlice,
      modal: modalSlice,
      biography: biographySlice,
    },
  });

  test("Should not have edit hero banner button", async () => {
    useGetQuery.mockImplementation(() => ({ data: initialglobalInfoState }));
    const { getByTestId, queryByTestId } = render(renderedLoggedOutMain);
    await waitFor(() => getByTestId("loginMenu"));
    expect(queryByTestId("heroBannerEdit")).toBeFalsy();
  });
  test("Should not have defunt picture edit button", async () => {
    useGetQuery.mockImplementation(() => ({ data: initialglobalInfoState }));

    const { getByTestId, queryByTestId } = render(renderedLoggedOutMain);
    await waitFor(() => getByTestId("loginMenu"));
    expect(queryByTestId("defuntImageEdit")).toBeFalsy();
  });
  /*   test.only("Should have edit hero banner button", async () => {

    useGetQuery.mockImplementation(() => ({data: initialglobalInfoState}));

    store.dispatch(userLoggedIn());
    store.dispatch(isAdminSet({isAdmin:true}))
    const { queryByTestId, getByTestId } = render(renderedLoggedOutMain)

    await waitFor(() => getByTestId('logoutButton'))
    expect(queryByTestId("heroBannerEdit")).toBeTruthy();
  });  */
  test("Should have defunt picture edit button if admin and connected", async () => {
    useGetQuery.mockImplementation(() => ({ data: initialglobalInfoState }));
    const { queryByTestId } = render(
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <React.Suspense fallback={<p>attendez...</p>}>
            <MemoryRouter>
              <MainPage />
            </MemoryRouter>
          </React.Suspense>
        </Provider>
      </QueryClientProvider>,
    );
    store.dispatch(userLoggedIn());
    store.dispatch(isAdminSet({ isAdmin: true }));
    await waitFor(() => expect(queryByTestId("defuntImageEdit")).toBeTruthy());
  });
  test("Should have administrators edit button", async () => {
    useGetQuery.mockImplementation(() => ({ data: initialglobalInfoState }));
    const { queryByTestId, getByTestId } = render(
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <React.Suspense fallback={<p>attendez...</p>}>
            <MemoryRouter>
              <MainPage />
            </MemoryRouter>
          </React.Suspense>
        </Provider>
      </QueryClientProvider>,
    );
    store.dispatch(userLoggedIn());
    store.dispatch(isAdminSet({ isAdmin: true }));
    await waitFor(() => getByTestId("logoutButton"));
    expect(queryByTestId("administratorsEdit")).toBeTruthy();
  });
  test("Should not see Prestation if empty data", async () => {
    useGetQuery.mockImplementation(() => ({ data: initialglobalInfoState }));
    const { queryByTestId } = render(
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <React.Suspense fallback={<p>attendez...</p>}>
            <MemoryRouter>
              <MainPage />
            </MemoryRouter>
          </React.Suspense>
        </Provider>
      </QueryClientProvider>,
    );

    await waitFor(() => expect(queryByTestId("transversalBlocks")).toBeFalsy());
  });
  test("should see defunt firstname and lastname", async () => {
    useGetQuery.mockImplementation(() => ({ data: initialglobalInfoState }));
    const { getByTestId } = render(
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <React.Suspense fallback={<p>attendez...</p>}>
            <MemoryRouter>
              <MainPage />
            </MemoryRouter>
          </React.Suspense>
        </Provider>
      </QueryClientProvider>,
    );

    await waitFor(() => getByTestId("defuntInfosWrapper"));
    expect(getByTestId("defuntName")).toHaveTextContent("Mme Marie DUBOIS");
    expect(getByTestId("defuntBirthdate")).toHaveTextContent("1937");
    expect(getByTestId("defuntDeathdate")).toHaveTextContent("2022");
  });

  test("Should see default image if no defunt image saved", async () => {
    useGetQuery.mockImplementation(() => ({ data: initialglobalInfoState }));
    const { queryByTestId } = render(
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <React.Suspense fallback={<p>attendez...</p>}>
            <MemoryRouter>
              <MainPage />
            </MemoryRouter>
          </React.Suspense>
        </Provider>
      </QueryClientProvider>,
    );

    await waitFor(() =>
      expect(queryByTestId("placeholder-defunt-image")).toBeTruthy(),
    );
  });
  test("Should see defunt image if there is one", async () => {
    const dataWithPicture = {
      ...initialglobalInfoState,
      field_es_profile_image: {
        url: "coucou.jpg",
        name: "coucou.jpg",
      },
    };
    useGetQuery.mockImplementation(() => ({ data: dataWithPicture }));
    const { queryByTestId } = render(
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <React.Suspense fallback={<p>attendez...</p>}>
            <MemoryRouter>
              <MainPage />
            </MemoryRouter>
          </React.Suspense>
        </Provider>
      </QueryClientProvider>,
    );

    await waitFor(() => expect(queryByTestId("defunt-image")).toBeTruthy());
  });

  test("should not have NaN if no dates", async () => {
    useGetQuery.mockImplementation(() => ({ data: receivedNoDatesData }));
    const { getByTestId } = render(
      <Provider store={store}>
        <React.Suspense fallback={<p>attendez...</p>}>
          <MemoryRouter>
            <MainPage />
          </MemoryRouter>
        </React.Suspense>
      </Provider>,
    );
    expect(getByTestId("defuntBirthdate")).not.toHaveTextContent("NaN");
    expect(getByTestId("defuntDeathdate")).toHaveTextContent("");
  });
  test("should see 404 error page if no Espace Souvenirs data", async () => {
    useGetQuery.mockImplementation(() => ({ data: receivedEmptyData }));
    const { result } = renderHook(() => useGetQuery());
    await waitFor(() => result.current.data);

    const { getByText } = render(
      <Provider store={store}>
        <MemoryRouter>
          <MainPage />
        </MemoryRouter>
      </Provider>,
    );

    expect(getByText("Page introuvable (404)")).toBeTruthy();
  });
  test("should not see Ceremonies bloc if no Places received", async () => {
    useGetQuery.mockImplementation(() => ({ data: initialglobalInfoState }));
    const { getByTestId, queryByTestId, debug } = render(
      <Provider store={store}>
        <MemoryRouter>
          <MainPage />
        </MemoryRouter>
      </Provider>,
    );
    await waitFor(() => getByTestId("loginMenu"));
    expect(queryByTestId("ceremonies")).toBeFalsy();
  });
  test("should see Ceremonies bloc if Places received", async () => {
    const stateWithCeremonies = {
      ...initialglobalInfoState,
      field_es_avis: {
        lieux: [
          {
            adresse: "38 RUE SAINT NICOLAS",
            codepostal: "73000",
            commune: "CHAMBERY",
            adresse2: "",
            datelieu: 1654877700,
            nom: "CREMATORIUM MUNICIPAL DE CHAMBERY",
            pays: "FR",
            type: "crémation",
            availability: "public",
          },
        ],
      },
    };
    useGetQuery.mockImplementation(() => ({ data: stateWithCeremonies }));
    const { getByTestId, queryByTestId, debug } = render(
      <Provider store={store}>
        <MemoryRouter>
          <MainPage />
        </MemoryRouter>
      </Provider>,
    );
    await waitFor(() => getByTestId("loginMenu"));
    expect(queryByTestId("ceremonies")).toBeTruthy();
  });
  test("should see one Ceremony if one Place received", async () => {
    const stateWithCeremonies = {
      ...initialglobalInfoState,
      field_es_avis: {
        lieux: [
          {
            adresse: "38 RUE SAINT NICOLAS",
            codepostal: "73000",
            commune: "CHAMBERY",
            adresse2: "",
            datelieu: 1654877700,
            nom: "CREMATORIUM MUNICIPAL DE CHAMBERY",
            pays: "FR",
            type: "crémation",
            availability: "public",
          },
        ],
      },
    };
    useGetQuery.mockImplementation(() => ({ data: stateWithCeremonies }));
    const { getByTestId } = render(
      <Provider store={store}>
        <MemoryRouter>
          <MainPage />
        </MemoryRouter>
      </Provider>,
    );
    await waitFor(() => getByTestId("loginMenu"));
    expect(getByTestId("ceremonies-list").childNodes.length).toBe(1);
  });
  test("should see Rendre Hommage bloc if connected", async () => {
    useGetQuery.mockImplementation(() => ({ data: initialglobalInfoState }));
    const { getByTestId, queryByTestId } = render(
      <Provider store={store}>
        <MemoryRouter>
          <MainPage />
        </MemoryRouter>
      </Provider>,
    );
    store.dispatch(userLoggedIn());
    store.dispatch(isAdminSet({ isAdmin: true }));
    await waitFor(() => getByTestId("logoutButton"));
    expect(queryByTestId("homage")).toBeTruthy();
  });
  test("should see add a message button if click on message tab", async () => {
    useGetQuery.mockImplementation(() => ({ data: initialglobalInfoState }));
    const { getByText, getByTestId } = render(
      <Provider store={store}>
        <MemoryRouter>
          <MainPage />
        </MemoryRouter>
      </Provider>,
    );
    await waitFor(() => getByTestId("messages"));
    fireEvent.click(document.getElementById("messages"));
    await waitFor(() => getByText("Ecrire un message"));
    const writeAMessageButton = getByText("Ecrire un message");
    expect(writeAMessageButton).toBeTruthy();
  });
  test("should not see messages list if there are no messages", async () => {
    useGetQuery.mockImplementation(() => ({
      data: { result: [], status: 200 },
    }));

    const { result } = renderHook(() => useGetQuery());
    await waitFor(() => result.current.data);
    const { queryByTestId } = render(
      <Provider store={store}>
        <MemoryRouter>
          <MessagesList />
        </MemoryRouter>
      </Provider>,
    );
    await waitFor(() => expect(queryByTestId("emptyMessageList")).toBeTruthy());
  });
  test("should see messages list if there are messages", async () => {
    useGetQuery.mockImplementation(() => ({
      data: { result: messages, status: 200 },
    }));

    const { result } = renderHook(() => useGetQuery());
    await waitFor(() => result.current.data);
    const { getByTestId, getAllByTestId, debug } = render(
      <Provider store={store}>
        <MemoryRouter>
          <MessagesList />
        </MemoryRouter>
      </Provider>,
    );
    await waitFor(() =>
      expect(getByTestId("messagesList").childNodes.length).toBeGreaterThan(0),
    );
    expect(getAllByTestId("writtenby-message")).toBeTruthy();
  });

  test("should see messages with pagination list if there are more than 8 messages", async () => {
    /*     usePostQuery.mockImplementation(() => {
      return {
        mutate: () => jest.fn(),
        data: { data: { result: manyMessages } },
      };
    });
    const { result } = renderHook(() => usePostQuery()); */
    useGetQuery.mockImplementation(() => ({
      data: { result: manyMessages, status: 200 },
    }));

    const { result } = renderHook(() => useGetQuery());
    await waitFor(() => result.current.data);
    const { getByTestId, getAllByText } = render(
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <MemoryRouter>
            <MessagesList />
          </MemoryRouter>
        </Provider>
      </QueryClientProvider>,
    );

    expect(
      getByTestId("messagesWithPaginationList").childNodes.length,
    ).toBeGreaterThan(0);
  });
  /*   test("should publish unpublished message if click on switch (admin user)", async () => {
    useGetQuery.mockImplementation(() => ({ data: initialglobalInfoState }));
    store.dispatch(userLoggedIn());
    store.dispatch(isAdminSet({ isAdmin: true }));
    const { getByText, getAllByTestId } = render(
      <Provider store={store}>
        <MemoryRouter>
          <MessageItem message={unpublishedMessage} />
        </MemoryRouter>
      </Provider>,
    );
    const checkInput = getAllByTestId("switchCheck")[0];
    fireEvent.click(checkInput);
    await waitFor(() => expect(getByText("Publié")).toBeTruthy());
  }); */
  /*   test("should see only published messages in list if there are messages (disconnected user)", async () => {
    useGetQuery.mockImplementation(() => ({data: { result: messages, status: 200 }}));
    const { result } = renderHook(() => useGetQuery());
    await waitFor(() => result.current.data);
    const { getByTestId, getAllByText } = render(<Provider store={store}>
      <MemoryRouter>
        <MessagesList />
      </MemoryRouter>
    </Provider>)
    expect(getByTestId("messagesList").childNodes.length).toEqual(1);
  });  */
  test("should have the author, date and message body if there are messages", async () => {
    useGetQuery.mockImplementation(() => ({
      data: { result: messages, status: 200 },
    }));

    const { result } = renderHook(() => useGetQuery());
    await waitFor(() => result.current.data);
    const { getByTestId, getAllByText, getAllByTestId } = render(
      <Provider store={store}>
        <MemoryRouter>
          <MessagesList />
        </MemoryRouter>
      </Provider>,
    );
    expect(getByTestId("messagesList").childNodes.length).toBeGreaterThan(0);
    expect(getAllByTestId("writtenby-message")).toBeTruthy();
    expect(getAllByText("Aenean porta tincidunt finibus.")).toBeTruthy();
    expect(getAllByText("le 10 juin 2022 à 12h13")).toBeTruthy();
  });
  test("should see biography default text (connected user)", async () => {
    useGetQuery.mockImplementation(() => ({ data: initialglobalInfoState }));
    const { getByTestId } = render(
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <MemoryRouter>
            <MainPage />
          </MemoryRouter>
        </Provider>
      </QueryClientProvider>,
    );
    store.dispatch(userLoggedIn());
    store.dispatch(isAdminSet({ isAdmin: true }));
    fireEvent.click(getByTestId("biographie"));
    await waitFor(() => expect(getByTestId("biographyText")).toBeTruthy());
  });
  test("should not see biography default text (logged out user)", async () => {
    useGetQuery.mockImplementation(() => ({ data: initialglobalInfoState }));
    const { queryByTestId } = render(
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <MemoryRouter>
            <ContentWrapper />
          </MemoryRouter>
        </Provider>
      </QueryClientProvider>,
    );
    expect(queryByTestId("biography")).toBeFalsy();
  });
  test("should not see agency telephone nor link if no agency phone or link", async () => {
    useGetQuery.mockImplementation(() => ({ data: receievedFakeAgency }));
    const { getByTestId, queryByTestId, debug } = render(
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <MemoryRouter>
            <MainPage />
          </MemoryRouter>
        </Provider>
      </QueryClientProvider>,
    );
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
    const { getByTestId, queryByTestId } = render(
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <MemoryRouter>
            <MainPage />
          </MemoryRouter>
        </Provider>
      </QueryClientProvider>,
    );
    await waitFor(() => getByTestId("agencyWrapper"));
    expect(queryByTestId("agencyPhone")).toBeTruthy();
    expect(queryByTestId("agencyCta")).toBeTruthy();
  });

  test("should see message form if click on Add New Message btn", async () => {
    useGetQuery.mockImplementation(() => ({ data: initialglobalInfoState }));
    const { getByTestId, getByText } = render(
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <MemoryRouter>
            <MainPage />
          </MemoryRouter>
        </Provider>
      </QueryClientProvider>,
    );
    await waitFor(() => getByTestId("messages"));
    fireEvent.click(document.getElementById("messages"));
    await waitFor(() => getByText("Ecrire un message"));
    fireEvent.click(getByText("Ecrire un message"));
    await waitFor(() => getByTestId("messagesForm"));
    const writeAMessageForm = getByTestId("messagesForm");
    expect(writeAMessageForm).toBeTruthy();
  });
});
