import React, { useState } from "react";
import { nanoid } from "nanoid";
import bg1 from "Images/bg-images/img-bg-1.jpg";
import bg2 from "Images/bg-images/img-bg-2.jpg";
import bg3 from "Images/bg-images/img-bg-3.jpg";
import bg4 from "Images/bg-images/img-bg-4.jpg";
import bg5 from "Images/bg-images/img-bg-5.jpg";
import bg6 from "Images/bg-images/img-bg.jpg";

import { useSelector, useDispatch } from "react-redux";
import { modalClosed } from "../../context/modalSlice";
import { messagePictureUpdated } from "../../context/messageSlice";

import FormInput from "../Forms/FormInput";
import ModalTitle from "./ModalTitle";
import ModalSubTitle from "./ModalSubTitle";
import Button from "../Button/Button";
import Icon from "../Icons/Icon";

/* import '../../../scss/helpers.scss'; */

const imagesArr = [bg1, bg2, bg3, bg4, bg5, bg6];
const imagesWithId = imagesArr.map((img) => ({ src: img, imgId: nanoid() }));

export default function MessagePictureHeroModal() {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);
  const [inputValue, setInputValue] = useState(userState.heroBannerImage);
  const handleImageChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = () => {
    dispatch(messagePictureUpdated({ messagePictures: [inputValue] }));
    dispatch(modalClosed());
  };

  return (
    <>
      <ModalTitle>Sélectionner une photo d’arrière plan</ModalTitle>
      <ModalSubTitle>
        Personnalisez votre espace souvenirs avec la photo d’arrière plan de
        votre choix parmi une sélection :
      </ModalSubTitle>
      <form noValidate onSubmit={handleSubmit}>
        <div className="image-radios-wrapper">
          {imagesWithId.map(({ src, imgId }) => {
            return (
              <FormInput
                key={imgId}
                id={imgId}
                wrapperClass="input-wrapper--radio"
                name="hero_banner_image"
                labelImage={src}
                value={src}
                checked={inputValue === src}
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
