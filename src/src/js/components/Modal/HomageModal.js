import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import {
  errorMessageNetwork,
  homageMachineName,
  postSaveFieldApiUrl,
} from "../../constants";
import { homageTextUpdated } from "../../context/globalInfoSlice";
import { modalClosed } from "../../context/modalSlice";
import { decoded } from "../../services/formatting";
import useForm from "../../services/useForm";
import usePostQuery from "../../services/usePostQuery";
import HomageForm from "../Forms/HomageForm";
import ModalTitle from "./ModalTitle";

export default function HomageModal() {
  const params = useParams();
  const [errorMessage, setErrorMessage] = useState(null);
  const globalInfoState = useSelector((state) => state.globalInfo);
  const dispatch = useDispatch();
  const updateTextHommage = usePostQuery();
  const form = useRef(null);

  const initialFormState = {
    homage_text: decoded(JSON.parse(globalInfoState?.homageText)) || "",
  };
  const validationValues = {
    homage_text: {
      isRequired: false,
    },
  };
  const {
    inputValues,
    changeHandler,
    errorHandler,
    submitErrorsHandler,
    errors,
    isValid,
  } = useForm({
    initialFormState,
    validationValues,
  });
  const closeModal = () => {
    dispatch(modalClosed());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const hommage_obj = {
      field_value: inputValues.homage_text,
      field_machine_name: homageMachineName,
      entity_hash: params.espaceId,
    };
    try {
      updateTextHommage.mutate(
        { data: hommage_obj, apiUrl: postSaveFieldApiUrl },
        {
          onSuccess: ({ data }) => {
            dispatch(
              homageTextUpdated({
                homageText: JSON.stringify(data?.field_value),
              }),
            );
            dispatch(modalClosed());
          },
          onError: () => {
            setErrorMessage(errorMessageNetwork);
          },
        },
      );
    } catch {
      // Something went wrong
      setErrorMessage(errorMessageNetwork);
    }
  };

  return (
    <>
      <ModalTitle>Rendre hommage</ModalTitle>
      {errorMessage && <p className="message-status mb-40">{errorMessage}</p>}
      <HomageForm
        handleSubmit={handleSubmit}
        form={form}
        inputValues={inputValues}
        changeHandler={changeHandler}
        closeModal={closeModal}
      />
    </>
  );
}
