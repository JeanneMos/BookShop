import React from "react";

import ButtonsWrapper from "../../layouts/ButtonsWrapper";
import Button from "../Button/Button";
import Icon from "../Icons/Icon";
import FormTextarea from "./FormTextarea";

export default function HomageForm({
  handleSubmit,
  form,
  inputValues,
  changeHandler,
  closeModal,
}) {
  return (
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
  );
}
