import React, {useMemo} from "react";
import { render, fireEvent, waitFor, cleanup } from "@testing-library/react";
import { renderedLoggedInMain, 
  renderedLoggedOutMain, renderedLoggedOutMainNoHomage, renderedLoggedInMainNoHomage } from "./renderedPages";
import Header from "../components/Header/Header";
import MessagesList from "../components/Messages/MessagesList";
import useGetQuery from "../services/useGetQuery";
import '@testing-library/jest-dom';
import {renderHook } from "@testing-library/react-hooks";
import { store } from '../store/store';
import { Provider } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import userSlice from "../context/userSlice";
import messageSlice from "../context/messageSlice";
import modalSlice from "../context/modalSlice";
import { configureStore } from '@reduxjs/toolkit'
import MessageItem from "../components/Messages/MessageItem";
import ContentWrapper from "../components/ContentWrapper/ContentWrapper";
import DefuntInfos from "../components/DefuntInfo/DefuntInfos";
import MainPage from "../pages/MainPage";
import { MemoryRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { userLoggedIn } from "../context/userSlice";
import { isAdminSet } from "../context/userSlice";
import { receivedFakeData,
  initialEmptyState,
  receievedFakeAgency,
  receivedEmptyData,
  receivedNoDatesData,
  messages,
  unpublishedMessages,
  unpublishedMessage,
  biography} from "./constants";
import Agency from "../components/Agency/Agency";
import DefuntWithAdministrator from "../components/DefuntInfo/DefuntWithAdministrator";

jest.mock("../services/useGetQuery");
describe("On the main page", () => {
  
  afterEach(cleanup);

  afterEach(() => {
    jest.clearAllMocks();
  });
  const queryClient = new QueryClient();

  window.HTMLElement.prototype.scrollIntoView = jest.fn();
  const store = configureStore({
    reducer: {
      user: userSlice,
      messages: messageSlice,
      modal: modalSlice,
    },
  });

  test("Should not have edit hero banner button", async () => {

    useGetQuery.mockImplementation(() => ({data: initialEmptyState}));
    const { result } = renderHook(() => useGetQuery())
    await waitFor(() => result.current.data)
    const { getByTestId, queryByTestId } = render(renderedLoggedOutMain)
    await waitFor(() => getByTestId('loginMenu')) 
    expect(queryByTestId("heroBannerEdit")).toBeFalsy();
    useGetQuery.mockRestore()
  }); 
  test("Should not have defunt picture edit button", async () => {
    useGetQuery.mockImplementation(() => ({data: initialEmptyState}));
    const { getByTestId, queryByTestId  } = render(renderedLoggedOutMain) 
    await waitFor(() => getByTestId('loginMenu'))
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
    store.dispatch(isAdminSet({isAdmin:true}));
    useGetQuery.mockImplementation(() => ({data: initialEmptyState}));
    const { queryByTestId } = render(<QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <React.Suspense fallback={<p>attendez...</p>}>
          <MemoryRouter >
            <MainPage/>
          </MemoryRouter>
        </React.Suspense>
      </Provider>
    </QueryClientProvider>);
    await waitFor(() => expect(queryByTestId("defuntImageEdit")).toBeTruthy());
    useGetQuery.mockRestore();
  }); 
  test("Should have administrators edit button", async () => {

    useGetQuery.mockImplementation(() => ({data: initialEmptyState}));
    store.dispatch(userLoggedIn());
    store.dispatch(isAdminSet({isAdmin:true}));
    const { queryByTestId, getByTestId } = render(<QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <React.Suspense fallback={<p>attendez...</p>}>
          <MemoryRouter >
            <MainPage/>
          </MemoryRouter>
        </React.Suspense>
      </Provider>
    </QueryClientProvider>);
    await waitFor(() => getByTestId('logoutButton')) 
    expect(queryByTestId("administratorsEdit")).toBeTruthy();
    useGetQuery.mockRestore();
  }); 
  test("Should not see Prestation if empty data", async () => {
    useGetQuery.mockImplementation(() => ({data: initialEmptyState}));
    const { getByTestId } = render(<QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <React.Suspense fallback={<p>attendez...</p>}>
          <MemoryRouter >
            <MainPage/>
          </MemoryRouter>
        </React.Suspense>
      </Provider>
    </QueryClientProvider>);
    
    await waitFor(() => expect(getByTestId("transversalBlocks")).toBeFalsy());
    useGetQuery.mockRestore();
  }); 
  test("should see defunt firstname and lastname", async() => {
    useGetQuery.mockImplementation(() => ({data: initialEmptyState}));
    const { getByTestId} = render(<QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <React.Suspense fallback={<p>attendez...</p>}>
          <MemoryRouter >
            <MainPage/>
          </MemoryRouter>
        </React.Suspense>
      </Provider>
    </QueryClientProvider>) 

    await waitFor(() => getByTestId("defuntInfosWrapper"))
    expect(getByTestId("defuntName")).toHaveTextContent("Mme Marie DUBOIS");
    expect(getByTestId("defuntBirthdate")).toHaveTextContent("1937");
    expect(getByTestId("defuntDeathdate")).toHaveTextContent("2022");
    useGetQuery.mockRestore();
  })
  test("should not have NaN if no dates", async() => {
    useGetQuery.mockImplementation(() => ({data: receivedNoDatesData}));
    const { result } = renderHook(() => useGetQuery())
    await waitFor(() => result.current.data)
    const { getByTestId } = render(
      <Provider store={store}>
        <React.Suspense fallback={<p>attendez...</p>}>
          <MemoryRouter >
            <MainPage/>
          </MemoryRouter>
        </React.Suspense>
      </Provider>) 
    expect(getByTestId("defuntBirthdate")).not.toHaveTextContent("NaN");
    expect(getByTestId("defuntDeathdate")).toHaveTextContent("");
    useGetQuery.mockRestore();
  })
  test.only("should see 404 error page if no Espace Souvenirs data", async() => {
    useGetQuery.mockImplementation(() => ({data: receivedEmptyData}));
    const { result } = renderHook(() => useGetQuery());
    await waitFor(() => result.current.data)

    const { getByText } = render(<Provider store={store}>
      <MemoryRouter>
        <MainPage />
      </MemoryRouter>
    </Provider>) 

    expect(getByText("Page introuvable (404)")).toBeTruthy();
    useGetQuery.mockRestore();
  });
  test("should see Rendre Hommage bloc if connected", async () => {
    useGetQuery.mockImplementation(() => ({data:initialEmptyState}));
    const { result } = renderHook(() => useGetQuery());
    await waitFor(() => result.current.data)
    store.dispatch(userLoggedIn());
    store.dispatch(isAdminSet({isAdmin:true}));
    const { getByTestId, queryByTestId  } = render(<Provider store={store}>
      <MemoryRouter>
        <MainPage />
      </MemoryRouter>
    </Provider>) 
    await waitFor(() => getByTestId('logoutButton')) 
    expect(queryByTestId("homage")).toBeTruthy();
    useGetQuery.mockRestore();
  }); 
  test("should see add a message button if click on message tab", async () => {
    useGetQuery.mockImplementation(() => ({data:initialEmptyState}));
    const { result } = renderHook(() => useGetQuery())
    await waitFor(() => result.current.data)
    const { getByText, getByTestId } = render(<Provider store={store}>
      <MemoryRouter>
        <MainPage />
      </MemoryRouter>
    </Provider>) 
    await waitFor(() => getByTestId('loginMenu')) 
    fireEvent.click(document.getElementById("messages"))
    await waitFor(() =>  getByText("Ecrire un message"))
    const writeAMessageButton = getByText("Ecrire un message")
    expect(writeAMessageButton).toBeTruthy();
    useGetQuery.mockRestore();
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
  test.only("should see messages list if there are messages (connected user)", async () => {
    useGetQuery.mockImplementation(() => ({data:initialEmptyState}));
    const { result } = renderHook(() => useGetQuery())
    await waitFor(() => result.current.data)
    const { getByTestId, getByText } = render(<Provider store={store}>
      <MemoryRouter>
        <MessagesList />
      </MemoryRouter>
    </Provider>) 
    
    expect(getByTestId("messagesList").childNodes.length).toBeGreaterThan(0);
    expect(getByText("Ecrit par Elise Dupont")).toBeTruthy();
  }); 
  test("should publish unpublished message if click on switch (connected user)", async () => {
    const { getAllByTestId, getByText} = render(<Provider store={{user: {isLogged: true}}}>
      <MessageItem message={unpublishedMessage} />
    </Provider>) 
    const checkInput = getAllByTestId('switchCheck')[0];
    fireEvent.click(checkInput)
    await waitFor(() => expect(getByText("Publié")).toBeTruthy());
  }); 
  test("should see only published messages in list if there are messages (disconnected user)", () => {
    const { getByTestId } = render(<Provider store={{messages: {messages: unpublishedMessages}}}>
      <MessagesList />
    </Provider>) 
    expect(getByTestId("messagesList").childNodes.length).toEqual(1);
  }); 
  test("should have the author, date and message body if there are messages", () => {
    const { getByTestId, 
      getByText } = render(<Provider store={{messages: {messages}}}>
      <MessagesList />
    </Provider>) 
    expect(getByTestId("messagesList").childNodes.length).toEqual(2);
    expect(getByText("Ecrit par Петька")).toBeTruthy();
    expect(getByText("123123")).toBeTruthy();
    expect(getByText("Le 1 janvier 1970 à 01h00")).toBeTruthy();
  }); 
  test("should see biography default text (connected user)", async () => {
    const { getByTestId } = render(<QueryClientProvider client={queryClient}><Provider store={
      {user: {biography, isLogged: true, isBiographyEdited: false}
      }}>
      <ContentWrapper />
    </Provider></QueryClientProvider>) 
    fireEvent.click(getByTestId("Biographie"));
    await waitFor(() => expect(getByTestId("biographyText")).toBeTruthy())
  }); 
  test("should not see biography default text (logged out user)", () => {
    const { queryByTestId } = render(<Provider store={{
      user: {biography, isLogged: false, isBiographyEdited: false}
    }}>
      <ContentWrapper />
    </Provider>) 
    expect(queryByTestId("Biography")).toBeFalsy();
  }); 
  test("should not see agency telephone nor link if no agency phone or link", async () => {
    useGetQuery.mockImplementation(() => ({data: receievedFakeAgency}));
    const { result } = renderHook(() => useGetQuery())
    await waitFor(() => result.current.data)

    const initUserState = {
      agency: result.current.data
    }
    const { queryByTestId } = render(<Provider store={{user:initUserState}}>
      <Agency />
    </Provider>) 
    expect(queryByTestId("agencyPhone")).toBeFalsy();
    expect(queryByTestId("agencyCta")).toBeFalsy();
    useGetQuery.mockRestore();
  }); 
  test("should see agency telephone and link if agency has phone or link", async () => {
    const dataWithPhoneLink = {
      ...receievedFakeAgency,
      agency_phone: "010101",
      agency_url: 'https://pfg.fr'
    }
    useGetQuery.mockImplementation(() => ({data: dataWithPhoneLink}));
    const { result } = renderHook(() => useGetQuery())
    await waitFor(() => result.current.data)
    const initUserState = {
      agency: result.current.data
    }
    const { queryByTestId } = render(<Provider store={{userState:initUserState}}>
      <Agency />
    </Provider>) 
    expect(queryByTestId("agencyPhone")).toBeTruthy();
    expect(queryByTestId("agencyCta")).toBeTruthy();
    useGetQuery.mockRestore();
  }); 

  test("should see message form if click on Add New Message btn", async () => {
    useGetQuery.mockImplementation(() => ({data: initialEmptyState}));
    const { result } = renderHook(() => useGetQuery())
    await waitFor(() => result.current.data)
    const { getByText, getByTestId } = render(renderedLoggedOutMain) 
    await waitFor(() => getByTestId('loginMenu')) 
    fireEvent.click(document.getElementById("messages"))
    await waitFor(() =>  getByText("Ecrire un message")) 
    fireEvent.click(getByText("Ecrire un message"))
    await waitFor(() =>  getByTestId("messagesForm")) 
    const writeAMessageForm = getByTestId("messagesForm")
    expect(writeAMessageForm).toBeTruthy();
  }); 

});
