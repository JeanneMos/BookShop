import { configureStore } from "@reduxjs/toolkit";
import { cleanup, fireEvent, render, waitFor } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";

import Header from "../components/Header/Header";
import Search from "../components/Search/Search";
import administratorSlice, {
  isAdminSet,
  userLoggedIn,
  userLoggedOut,
} from "../context/administratorSlice";
import biographySlice from "../context/biographySlice";
import globalInfoSlice from "../context/globalInfoSlice";
import messageSlice from "../context/messageSlice";
import modalSlice from "../context/modalSlice";
import useGetQuery from "../services/useGetQuery";
import { resultsSuggestions } from "./constants";
import { renderedLoggedOutLanding } from "./renderedPages";

jest.mock("../services/useGetQuery");

describe("As a user i should see :", () => {
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
  afterEach(cleanup);
  afterAll(() => {
    jest.clearAllMocks();
  });

  beforeEach(() => {
    useGetQuery.mockImplementation(() => ({}));
    //dispatch.mockImplementation(() => ({}));
  });
  beforeAll(() => {
    ReactDOM.createPortal = jest.fn((element, node) => {
      return element;
    });
  });

  /*   const modalRoot = document.createElement("div");
  modalRoot.setAttribute("id", "react-portal");
  document.body.appendChild(modalRoot);   */

  test("Banner link to HP", () => {
    const { getByTestId } = render(renderedLoggedOutLanding);
    const linkText = getByTestId("bannerLink");
    expect(linkText).toBeTruthy();
  });

  /*   test("Login button click", async () => {
    const { getByTestId, queryByTestId } = render(renderedLoggedOutLanding);
    await waitFor(() => getByTestId("loginMenu"));

    const loginMenu = getByTestId("loginMenu");
    fireEvent.click(loginMenu);

    await waitFor(() => queryByTestId("modalTest"));
  }); */
  /*   test("Should have Modal Close button if hasCloseButton set to true", async () => {
    store.dispatch(modalOpened({ modalType: "LoginModal" }));
    const wrapper = ({ children }) => (
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <MemoryRouter>{children}</MemoryRouter>
        </Provider>
      </QueryClientProvider>
    );
    render(<Modal />, { wrapper });
    await waitFor(() =>
      expect(screen.queryByText("Fermer la popin")).toBeTruthy(),
    );
  }); */
  /*   test("Should not have Modal Close button if hasCloseButton set to false", async () => {
    store.dispatch(
      modalOpened({ hasCloseButton: false, modalType: "LoginModal" }),
    );
    const wrapper = ({ children }) => (
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <MemoryRouter>{children}</MemoryRouter>
        </Provider>
      </QueryClientProvider>
    );
    render(<Modal />, { wrapper });
    await waitFor(() =>
      expect(screen.queryByText("Fermer la popin")).toBeFalsy(),
    );
  }); */

  /*   test("should have fetched items in logout menu if user connected", async () => {
    useGetQuery.mockImplementation(() => ({
      data: [
        { url: "/", title: "coucou" },
        { url: "/", title: "foufou" },
      ],
    }));
    const { getByTestId } = render(
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <React.Suspense fallback={<p>attendez...</p>}>
            <MemoryRouter>
              <Header />
            </MemoryRouter>
          </React.Suspense>
        </Provider>
      </QueryClientProvider>,
    );
    store.dispatch(userLoggedIn());
    store.dispatch(isAdminSet({ isAdmin: true }));
    await waitFor(() => getByTestId("logoutButton"));
    const drowdownMenu = getByTestId("dropdownMainMenu");
    expect(drowdownMenu.childNodes.length).toBe(3);
  }); */

  test("should have suggestions of search if title is in the list", async () => {
    useGetQuery.mockImplementation(() => ({ data: resultsSuggestions }));
    const { result } = renderHook(() => useGetQuery());
    const { queryByTestId } = render(
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <React.Suspense fallback={<p>attendez...</p>}>
            <MemoryRouter>
              <Search />
            </MemoryRouter>
          </React.Suspense>
        </Provider>
      </QueryClientProvider>,
    );
    const search = queryByTestId("searchInput");
    fireEvent.change(search, { target: { value: "hoho" } });
    await waitFor(() => result.current.data);
    expect(queryByTestId("searchResults").childNodes.length).toEqual(2);
  });

  test("should not have suggestions if title is not in the list", async () => {
    useGetQuery.mockImplementation(() => ({ data: resultsSuggestions }));
    const { result } = renderHook(() => useGetQuery());
    const { queryByTestId } = render(
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <React.Suspense fallback={<p>attendez...</p>}>
            <MemoryRouter>
              <Search />
            </MemoryRouter>
          </React.Suspense>
        </Provider>
      </QueryClientProvider>,
    );
    const search = queryByTestId("searchInput");
    fireEvent.change(search, { target: { value: "autre title" } });
    await waitFor(() => result.current.data);
    const searchResults = queryByTestId("searchResults");
    expect(searchResults).toBeFalsy();
  });

  /*   test('successful query hook', async () => {
    const createWrapper = () => {
      // ✅ creates a new QueryClient for each test
      const queryClient = new QueryClient()
      return ({ children }) => (
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      )
    }
    const { result, waitFor } = renderHook(() => useQueryData("https://jsonplaceholder.typicode.com/posts"), {
      wrapper: createWrapper()
    })

    await waitFor(() => result.current.isSuccess)

    expect(result.current.data?.name).toBe('mocked-react-query')
  }, 10000); */

  /*   test("si les paragraphs ne sont pas envoyés, la liste ne s'affiche pas", () => {
    const {container} = render(
      <ModuleParcourEnNPoints paragraphs={[]} title={title} />
    );
    expect(container.childNodes.length).toEqual(1);
  });  */
  /*   test("si il y a plus d'un paragraphe, l'image NEXT est affichée", () => {
    const {container} = render(
      <ModuleParcourEnNPoints paragraphs={items} title={title} />
    );
    expect(container.getElementsByClassName('next').length).toBeTruthy();
  }); */
  /*   test("si il y a un seul paragraphe, l'image NEXT n'est pas affichée", () => {
    const {container} = render(
      <ModuleParcourEnNPoints paragraphs={item} title={title} />
    );
    expect(container.getElementsByClassName('next').length).toEqual(0);
  }); */
});
