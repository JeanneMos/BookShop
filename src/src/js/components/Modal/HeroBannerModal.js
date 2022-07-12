import { nanoid } from "nanoid";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import {
  errorMessageNetwork,
  heroBannerMachineName,
  postSaveFieldApiUrl,
} from "../../constants";
import { heroImageUpdated } from "../../context/globalInfoSlice";
import { modalClosed } from "../../context/modalSlice";
import usePostQuery from "../../services/usePostQuery";
import Button from "../Button/Button";
import FormInput from "../Forms/FormInput";
import Icon from "../Icons/Icon";
import ModalSubTitle from "./ModalSubTitle";
import ModalTitle from "./ModalTitle";

const imagesArr = [
  { name: "sky.jpg" },
  { name: "sunset.jpg" },
  { name: "sky-with-birds.jpg" },
  { name: "water-lily.jpg" },
  { name: "mountains.jpg" },
  { name: "tree.jpg" },
];
const imagesWithId = imagesArr.map((img) => ({
  name: img.name,
  imgId: nanoid(),
}));

export default function HeroBannerModal() {
  const globalInfoState = useSelector((state) => state.globalInfo);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState(globalInfoState.heroBannerImage);
  const [errorMessage, setErrorMessage] = useState(null);
  const postHeroBanner = usePostQuery();
  const params = useParams();
  const handleImageChange = (e) => {
    setInputValue(e.target);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const heroImgObject = {
      field_value: inputValue.dataset.imagename,
      field_machine_name: heroBannerMachineName,
      entity_hash: params.espaceId,
    };
    try {
      postHeroBanner.mutate(
        { data: heroImgObject, apiUrl: postSaveFieldApiUrl },
        {
          onSuccess: ({ data }) => {
            dispatch(
              heroImageUpdated({
                heroBannerImage: { name: data?.field_value },
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
      <ModalTitle>Sélectionner une photo d’arrière plan</ModalTitle>
      <ModalSubTitle>
        Personnalisez votre Espace Hommage avec la photo d’arrière plan de votre
        choix parmi une sélection :
      </ModalSubTitle>
      {errorMessage && <p className="message-status mb-40">{errorMessage}</p>}
      <form noValidate onSubmit={handleSubmit}>
        <div className="image-radios-wrapper">
          {imagesWithId.map(({ imgId, name }) => {
            const localSrc = `${window.location.origin}/themes/custom/souvenirs/src/assets/images/bg-images/thumbnails/${name}`;
            return (
              <FormInput
                key={imgId}
                id={imgId}
                wrapperClass="input-wrapper--radio"
                name="hero_banner_image"
                imageName={name}
                labelImage={localSrc}
                value={localSrc}
                checked={inputValue === localSrc}
                onInputChange={handleImageChange}
                type="radio"
              />
            );
          })}
        </div>
        <Button
          type="submit"
          onClickAction={handleSubmit}
          btnClass="bg-current mt-30"
        >
          <span className="button-text">Valider cette photo</span>
          <span className="separator">&nbsp;</span>
          <Icon name="next" iconClass="white-icon" />
        </Button>
      </form>
    </>
  );
}
