import { nanoid } from "nanoid";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { heroImageUpdated } from "../../context/globalInfoSlice";
import { modalClosed } from "../../context/modalSlice";
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
  const handleImageChange = (e) => {
    setInputValue(e.target);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const heroImgObject = {
      // url: inputValue.value,
      name: inputValue.dataset.imagename,
    };

    dispatch(heroImageUpdated({ heroBannerImage: { ...heroImgObject } }));
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
          {imagesWithId.map(({ imgId, name }) => {
            const localSrc = `${window.location.origin}/themes/custom/souvenirs/src/assets/images/bg-images/${name}`;
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
