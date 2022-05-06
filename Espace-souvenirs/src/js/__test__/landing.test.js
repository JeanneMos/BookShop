import React from "react";
import ReactDOM from "react-dom"

import { render, fireEvent, waitFor, cleanup, screen } from "@testing-library/react";
import {renderHook } from "@testing-library/react-hooks"
import Search from "../components/Search/Search";
import {renderedLoggedOutLanding, renderedLoggedInLanding} from './renderedPages';
import { store } from '../store/store';
import { Provider } from 'react-redux';
/* import '@testing-library/jest-dom/extend-expect' */

import { useSelector, useDispatch } from 'react-redux';
import useGetQuery from "../services/useGetQuery";

import Modal from "../components/Modal/Modal";
import LoginModal from "../components/Modal/LoginModal";
import { MemoryRouter } from "react-router-dom";
import {resultsSuggestions} from "./constants"

jest.mock("../services/useGetQuery");


describe("As a user i should see :", () => {
  const userState = {
    isLogged: false,
    isAdmin: false,
    defuntImage: null,
    heroBannerImage: "",
    defunt: {
      civility:"male",
      firstName:"Jean-Marie",
      lastName:"Le Pen",
      birthDate:"1959-03-05",
      deathDate:"2022-04-06"
    },
    prestations: [],
    homageText:
      "Chère famille, chers amis, Bonjour."
  };
  const messagesState = {
    messagePictures: null,
    messages:[]
  }
  const modalState = {
    isOpen: false,
    theme: 'white',
    hasCloseButton: true,
    modalType: null
  };
  
  jest.mock('react-redux', () => ({
    useDispatch: () => {},
    useSelector: () => ({
      state: {
        user: userState,
        modal: modalState,
        messages:messagesState
      },
    }),
  }));
  store.getState = jest.fn();
  afterEach(cleanup);
  afterAll(() => {
    jest.clearAllMocks();
  });

  beforeEach(() => {
    useGetQuery.mockImplementation(() => ({}))
    //dispatch.mockImplementation(() => ({}));
  })  
  beforeAll(() => {
    ReactDOM.createPortal = jest.fn((element, node) => {
      return element
    })
  }); 

  /*   const modalRoot = document.createElement("div");
  modalRoot.setAttribute("id", "react-portal");
  document.body.appendChild(modalRoot);   */
   
  test("Banner link to HP", () => {
    const { getByTestId } = render(renderedLoggedOutLanding) 
    const linkText = getByTestId("bannerLink");
    expect(linkText).toBeTruthy();
  }); 

  test.only("Login button", async () => {
    const { getByText, getByTestId  } = render(renderedLoggedOutLanding) 
    await waitFor(() => getByTestId('loginMenu'))
    const loginMenu = getByText(/Se connecter/i);
    expect(loginMenu).toBeTruthy();
  });

  test("Login button click", async () => {
    const { getByTestId, queryByTestId } = render(renderedLoggedOutLanding) 
    await waitFor(() => getByTestId('loginMenu'))

    const loginMenu = getByTestId("loginMenu");
    fireEvent.click(loginMenu)

    await waitFor(() => queryByTestId("modalTest")) 

  });
  test("Should have Modal Close button if hasCloseButton set to true", async () => {

    const wrapper = ({children}) => (
      <Provider store={{modalState: {isOpen: true, hasCloseButton: true, }}}>
        <MemoryRouter>
          {children}
        </MemoryRouter>
      </Provider>
    )
    render(<Modal />, {wrapper})
    await waitFor(() => expect(screen.queryByText('Fermer la popin')).toBeTruthy());
  });
  test("Should not have Modal Close button if hasCloseButton set to false", async () => {

    const wrapper = ({children}) => (
      <Provider store={{modalState: {isOpen: true, hasCloseButton: false, modalType: "LoginModal"}}}>
        <MemoryRouter>
          {children}
        </MemoryRouter>
      </Provider>
    )
    render(<Modal/>, {wrapper})
    await waitFor(() => expect(screen.queryByText('Fermer la popin')).toBeFalsy());
     
  });


  test("should have logout menu if user connected", async () => {
    const { getByText, getByTestId  } = render(renderedLoggedInLanding) 
    await waitFor(() => getByTestId('logoutButton'))
    //debug();
    const loginMenu = getByText(/Se déconnecter/i);
    expect(loginMenu).toBeTruthy();
  }); 

  test("should have fetched items in logout menu if user connected", async () => {
    useGetQuery.mockImplementation(() => ({data:[{title: "hoho", url:"/"}]}));
    const { result } = renderHook(() => useGetQuery())
    const { getByTestId } = render(renderedLoggedInLanding) 
    await waitFor(() => result.current.data)
    const drowdownMenu = getByTestId('dropdownMainMenu');
    expect(drowdownMenu.childNodes.length).toEqual(2)
  }); 

  test("should get Login menu if user logs out", async () => {
    const { getByTestId } = render(renderedLoggedInLanding) 
    await waitFor(() => getByTestId('logoutLink'))
    const logoutMenu = getByTestId("logoutLink");
    fireEvent.click(logoutMenu);

  /* await waitFore(() => getByTestId('loginButton'))
    const loginButton = getByTestId('loginButton');
    expect(loginButton).toEqual(1)*/
  });  


  test("should have suggestions if title is in the list", async () => {
    useGetQuery.mockImplementation(() => ({data: resultsSuggestions}));
    const { result } = renderHook(() => useGetQuery())
    const { queryByTestId} = render(<Search />)
    const search = queryByTestId("searchInput"); 
    fireEvent.change(search, {target: {value: 'hoho'}})
    await waitFor(() => result.current.data)

    expect(queryByTestId("searchResults").childNodes.length).toEqual(2);
  }); 

  test("should not have suggestions if title is not in the list", async () => {
    useGetQuery.mockImplementation(() => ({data: resultsSuggestions}));
    const { result } = renderHook(() => useGetQuery())
    const { queryByTestId} = render(<Search />)
    const search = queryByTestId("searchInput"); 
    fireEvent.change(search, {target: {value: 'autre title'}});
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


