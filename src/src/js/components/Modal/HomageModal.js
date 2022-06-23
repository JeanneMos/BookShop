import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { homageMachineName, postSaveFieldApiUrl } from "../../constants";
import { homageTextUpdated } from "../../context/globalInfoSlice";
import { modalClosed } from "../../context/modalSlice";
import ButtonsWrapper from "../../layouts/ButtonsWrapper";
import { decoded } from "../../services/formatting";
import useForm from "../../services/useForm";
import usePostQuery from "../../services/usePostQuery";
import Button from "../Button/Button";
import FormTextarea from "../Forms/FormTextarea";
import Icon from "../Icons/Icon";
import ModalTitle from "./ModalTitle";

export default function HomageModal() {
  const params = useParams();

  const globalInfoState = useSelector((state) => state.globalInfo);
  const dispatch = useDispatch();
  const updateTextHommage = usePostQuery();
  const form = useRef(null);

  const initialFormState = {
    homage_text: decoded(globalInfoState?.homageText) || "",
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
          onSuccess: (data) => {
            dispatch(
              homageTextUpdated({ homageText: data?.data?.field_value }),
            );
            dispatch(modalClosed());
          },
        },
      );
    } catch {
      // Something went wrong
    }
  };

  return (
    <>
      <ModalTitle>Rendre hommage</ModalTitle>

      <form noValidate onSubmit={handleSubmit} ref={form}>
        <FormTextarea
          labelText="Texte d'introduction"
          id="homage_text"
          name="homage_text"
          value={inputValues.homage_text}
          onInputChange={changeHandler}
        />
        <ButtonsWrapper position="right">
          <Button
            type="button"
            btnClass="bg-transparent"
            onClickAction={closeModal}
          >
            Annuler
          </Button>
          <Button type="submit" btnClass="bg-current">
            <Icon name="save" iconClass="white-icon book-icon" />
            <span className="separator">&nbsp;</span>
            <span className="button-text">enregistrer</span>
          </Button>
        </ButtonsWrapper>
      </form>
    </>
  );
}
