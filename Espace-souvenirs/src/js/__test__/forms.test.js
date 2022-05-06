import React from "react";
import { render, fireEvent, waitFor, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import useGetQuery from "../services/useGetQuery";
import userSlice from "../context/userSlice";
import messageSlice from "../context/messageSlice";
import modalSlice from "../context/modalSlice";
import biographySlice from "../context/biographySlice";
import { configureStore } from "@reduxjs/toolkit";

import "./__mocks__/fileMock";

import "../../assets/images/madame-img.jpg";
import MessageForm from "../components/Forms/MessageForm";
import BiographyForm from "../components/Forms/BiographyForm";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";

const mockRevoke = jest.fn();
describe("Forms:", () => {
  afterEach(cleanup);

  afterAll(() => {
    jest.clearAllMocks();
  });
  beforeEach(() => {
    globalThis.URL.createObjectURL = jest.fn((blob) => {
      return blob.name;
    });
  });

  afterEach(() => {
    globalThis.URL.revokeObjectURL = mockRevoke;
  });
  const store = configureStore({
    reducer: {
      user: userSlice,
      messages: messageSlice,
      modal: modalSlice,
      biography: biographySlice,
    },
  });

  const queryClient = new QueryClient();
  const closeForm = jest.fn();
  window.HTMLElement.prototype.scrollIntoView = jest.fn();

  function MockFile() {}

  MockFile.prototype.create = function (name, size, mimeType) {
    name = name || "mock.txt";
    size = size || 1024;
    mimeType = mimeType || "plain/txt";

    var base64Data =
      "aHR0cDovL2VzcGFjZS5sb2NhbC5mci8wZWFkYzMwZi05OTBlLTQ4MWYtOTRjOC0wNTJkMDc0NmQ0YmY=";
    var blob = new Blob([base64Data], { type: mimeType });
    blob.lastModifiedDate = new Date();
    blob.name = name;
    return blob;
  };
  const mock = new MockFile();
  const file = mock.create("coucou.jpeg", 1024, "image/jpeg");

  const newFile = mock.create("madame-img.jpg", 1024, "image/jpeg");

  test("Message form should have labels for all the fields", async () => {
    const { getByLabelText } = render(
      <Provider store={store}>
        <MessageForm />
      </Provider>,
    );
    expect(getByLabelText("Votre nom")).toBeTruthy();
    expect(getByLabelText("Votre prénom")).toBeTruthy();
    expect(getByLabelText("Votre email")).toBeTruthy();
    expect(getByLabelText("Votre message")).toBeTruthy();
    expect(
      getByLabelText(
        "Je souhaite être alerté des évènements privés ajoutés dans cet Espace Souvenirs",
      ),
    ).toBeTruthy();
  });
  test("should have error if required field is empty", async () => {
    const { getByTestId, getByLabelText, queryByText } = render(
      <Provider store={store}>
        <MessageForm />
      </Provider>,
    );
    fireEvent.change(getByLabelText("Votre prénom"), {
      target: { value: "Jack" },
    });
    const btn = getByTestId("submitMessageForm");
    fireEvent.click(btn);

    expect(queryByText("Merci de renseigner votre prénom")).toBeFalsy();
    expect(
      queryByText("Merci de renseigner votre nom de famille"),
    ).toBeTruthy();
  });
  test("should have caracters count in message textarea", async () => {
    const { getByTestId, getByLabelText, getByText } = render(
      <Provider store={store}>
        <MessageForm />
      </Provider>,
    );
    fireEvent.change(getByLabelText("Votre message"), {
      target: { value: "Jack" },
    });
    const btn = getByTestId("submitMessageForm");
    fireEvent.click(btn);
    expect(getByText("996 caractères restants.")).toBeTruthy();
  });
  test("should have caracters count in biography textarea", async () => {
    const { getByTestId, getByLabelText, getByText } = render(
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <BiographyForm closeForm={closeForm} />
        </Provider>
      </QueryClientProvider>,
    );
    fireEvent.change(getByLabelText("biographie"), {
      target: { value: "Biographie" },
    });
    const btn = getByTestId("submitBiographyForm");
    fireEvent.click(btn);
    expect(getByText("990 caractères restants.")).toBeTruthy();
  });
  test("should see tooltip when focus on information span", async () => {
    const { getByTestId, getByLabelText, getByText } = render(
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <BiographyForm closeForm={closeForm} />
        </Provider>
      </QueryClientProvider>,
    );
  });

  /*   test("should see 2 image previews if 2 photos in biography", async () => {

    const { getByTestId } = render(<QueryClientProvider client={queryClient}>
      <Provider store={store}><BiographyForm  closeForm={closeForm}/>
      </Provider>
    </QueryClientProvider>)

    await waitFor(() => expect(getByTestId("previewWrapper").children.length).toBe(2))
  });  */
});
