import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { messagePictureUpdated } from "../../providers/messageSlice";
import { modalClosed } from "../../providers/modalSlice";
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
}));

export default function MessagePictureHeroModal() {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState(null);
  const handleImageChange = (e) => {
    const imageName = e.target.dataset.imagename;
    setInputValue({ url: e.target.value, name: imageName });
  };
  const handleSubmit = () => {
    dispatch(
      messagePictureUpdated({
        messagePictures: [inputValue],
        customMessagePicture: false,
      }),
    );
    dispatch(modalClosed());
  };

  return (
    <>
      <ModalTitle>Sélectionner une photo d’arrière plan</ModalTitle>
      <ModalSubTitle>
        Personnalisez votre Espace Hommage avec la photo d’arrière plan de votre
        choix parmi une sélection :
      </ModalSubTitle>
      <form noValidate onSubmit={handleSubmit}>
        <div className="image-radios-wrapper">
          {imagesWithId.map(({ name }) => {
            const localSrc = `${window.location.origin}/themes/custom/souvenirs/src/assets/images/bg-images/thumbnails/${name}`;
            return (
              <FormInput
                key={name}
                id={name}
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
