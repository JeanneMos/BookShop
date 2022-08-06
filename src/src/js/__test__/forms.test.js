import "@testing-library/jest-dom";
import "./__mocks__/fileMock";
import "../../assets/images/madame-img.jpg";

import { configureStore } from "@reduxjs/toolkit";
import { cleanup, fireEvent, render, waitFor } from "@testing-library/react";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";

import AdministratorPersonalInfoForm from "../components/Forms/AdministratorPersonalInfoForm";
import BiographyForm from "../components/Forms/BiographyForm";
import CKEditorCustom from "../components/Forms/CKEditorCustom";
import LoginUserForm from "../components/Forms/LoginUserForm";
import MessageForm from "../components/Forms/MessageForm";
import administratorSlice from "../providers/administratorSlice";
import biographySlice, { biographyUpdated } from "../providers/biographySlice";
import globalInfoSlice from "../providers/globalInfoSlice";
import messageSlice from "../providers/messageSlice";
import modalSlice from "../providers/modalSlice";
import usePostQuery from "../services/usePostQuery";

const mockRevoke = jest.fn();
jest.mock("../services/usePostQuery");
describe("Forms:", () => {
  afterEach(cleanup);

  afterEach(() => {
    jest.clearAllMocks();
    usePostQuery.mockRestore();
    globalThis.URL.revokeObjectURL = mockRevoke;
  });
  beforeEach(() => {
    globalThis.URL.createObjectURL = jest.fn((blob) => {
      return blob.name;
    });
    usePostQuery.mockImplementation(() => ({ mutate: jest.fn() }));
  });

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
  const closeForm = jest.fn();
  window.HTMLElement.prototype.scrollIntoView = jest.fn();
  window.scrollTo = jest.fn();

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

  test("MessageForm : Message form should have labels for all the fields", async () => {
    const { getByLabelText } = render(
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <MessageForm />
        </Provider>
      </QueryClientProvider>,
    );
    expect(getByLabelText("Votre nom")).toBeTruthy();
    expect(getByLabelText("Votre prénom")).toBeTruthy();
    expect(getByLabelText("Votre email")).toBeTruthy();
    expect(getByLabelText("Votre message")).toBeTruthy();
    expect(
      getByLabelText(
        "Je souhaite être alerté des évènements privés ajoutés dans cet Espace Hommage",
      ),
    ).toBeTruthy();
  });
  test("MessageForm: should have error if required field is empty", async () => {
    const { getByTestId, getByLabelText, queryByText } = render(
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <MessageForm />
        </Provider>
      </QueryClientProvider>,
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
  test("MessageForm: should have caracters count in message textarea", async () => {
    const { getByTestId, getByLabelText, getByText } = render(
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <MessageForm />
        </Provider>
      </QueryClientProvider>,
    );
    fireEvent.change(getByLabelText("Votre message"), {
      target: { value: "Jack" },
    });
    const btn = getByTestId("submitMessageForm");
    fireEvent.click(btn);
    expect(getByText("996 caractères restants.")).toBeTruthy();
  });
  test("BiographyForm: should have caracters count in biography textarea", async () => {
    store.dispatch(
      biographyUpdated({
        biography: "Biographie",
        isBiographyEdited: true,
      }),
    );
    const { getByTestId, getByLabelText, getByText, debug } = render(
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <BiographyForm>
            <CKEditorCustom value="Biographie" />
          </BiographyForm>
        </Provider>
      </QueryClientProvider>,
    );
    const btn = getByTestId("submitBiographyForm");
    fireEvent.click(btn);
    expect(getByText("990 caractères restants.")).toBeTruthy();
  });
  test("Personal Information Form: should see error if password is too short, no MAJ and no special caracters", async () => {
    const { getByTestId, getByLabelText, getByText, queryByText } = render(
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <AdministratorPersonalInfoForm closeForm={closeForm} />
        </Provider>
      </QueryClientProvider>,
    );
    fireEvent.change(getByLabelText("Nouveau mot de passe (facultatif)"), {
      target: { value: "123" },
    });
    fireEvent.click(getByTestId("submitInfosForm"));
    await waitFor(() =>
      expect(getByText("Le mot de passe n'est pas assez long")).toBeTruthy(),
    );
    await waitFor(() =>
      expect(getByText("Il manque une majuscule")).toBeTruthy(),
    );
    await waitFor(() =>
      expect(getByText("Il manque un caractère spécial")).toBeTruthy(),
    );
    await waitFor(() =>
      expect(queryByText("Il manque un chiffre")).toBeFalsy(),
    );
  });
  test("Personal Information Form: should see error no confirmation new password is provided", async () => {
    const { getByTestId, getByLabelText, queryByText } = render(
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <AdministratorPersonalInfoForm closeForm={closeForm} />
        </Provider>
      </QueryClientProvider>,
    );
    fireEvent.change(getByLabelText("Nouveau mot de passe (facultatif)"), {
      target: { value: "Iiiiii7*" },
    });
    fireEvent.change(getByLabelText("Nom"), {
      target: { value: "Adams" },
    });
    fireEvent.change(getByLabelText("Prénom"), {
      target: { value: "Lily" },
    });
    fireEvent.change(getByLabelText("Email"), {
      target: { value: "lily@lily.com" },
    });
    fireEvent.click(getByTestId("submitInfosForm"));
    await waitFor(() =>
      expect(queryByText("Merci de confirmer votre mot de passe")).toBeTruthy(),
    );
  });
  test("Personal Information Form: should see error no curren password is provided if new password is not empty", async () => {
    const { getByTestId, getByLabelText, queryByText } = render(
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <AdministratorPersonalInfoForm closeForm={closeForm} />
        </Provider>
      </QueryClientProvider>,
    );
    fireEvent.change(getByLabelText("Nouveau mot de passe (facultatif)"), {
      target: { value: "Iiiiii7*" },
    });
    fireEvent.change(
      getByLabelText("Confirmer votre mot de passe (facultatif)"),
      {
        target: { value: "Iiiiii7*" },
      },
    );
    fireEvent.change(getByLabelText("Nom"), {
      target: { value: "Adams" },
    });
    fireEvent.change(getByLabelText("Prénom"), {
      target: { value: "Lily" },
    });
    fireEvent.change(getByLabelText("Email"), {
      target: { value: "lily@lily.com" },
    });
    fireEvent.click(getByTestId("submitInfosForm"));
    await waitFor(() =>
      expect(
        queryByText("Merci de confirmer votre mot de passe actuel"),
      ).toBeTruthy(),
    );
  });
  test("Personal Information Form : should see error if first name is in incorrect format", async () => {
    const { getByLabelText, queryByText } = render(
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <AdministratorPersonalInfoForm closeForm={closeForm} />
        </Provider>
      </QueryClientProvider>,
    );
    fireEvent.change(getByLabelText("Nom"), {
      target: { value: "123" },
    });
    fireEvent.blur(getByLabelText("Nom"));
    await waitFor(() =>
      expect(
        queryByText("Merci de renseigner votre nom de famille correct"),
      ).toBeTruthy(),
    );
  });
  test("LoginUserForm: should see error if email is not provided ", async () => {
    const { getByLabelText, queryByText } = render(
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <LoginUserForm />
        </Provider>
      </QueryClientProvider>,
    );
    fireEvent.change(getByLabelText("E-mail"), {
      target: { value: "" },
    });
    fireEvent.blur(getByLabelText("E-mail"));
    await waitFor(() =>
      expect(queryByText("Merci de renseigner votre identifiant")).toBeTruthy(),
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
