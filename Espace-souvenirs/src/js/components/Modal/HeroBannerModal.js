import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import bg1 from 'Images/bg-images/thumbnails/img-bg-1.jpg';
import bg2 from 'Images/bg-images/thumbnails/img-bg-2.jpg';
import bg3 from 'Images/bg-images/thumbnails/img-bg-3.jpg';
import bg4 from 'Images/bg-images/thumbnails/img-bg-4.jpg';
import bg5 from 'Images/bg-images/thumbnails/img-bg-5.jpg';
import bg6 from 'Images/bg-images/thumbnails/img-bg-6.jpg';
import { useSelector, useDispatch } from 'react-redux';

import { modalClosed } from '../../context/modalSlice';
import { heroImageUpdated } from '../../context/userSlice';

import FormInput from '../Forms/FormInput';
import ModalTitle from './ModalTitle';
import ModalSubTitle from './ModalSubTitle';
import Button from '../Button/Button';
import Icon from '../Icons/Icon';
/* 
import '../../../scss/helpers.scss'; */

const imagesArr = [
  {name: "img-bg-1.jpg", url: bg1}, 
  {name: "img-bg-2.jpg", url: bg2}, 
  {name: "img-bg-3.jpg", url: bg3}, 
  {name: "img-bg-4.jpg", url: bg4}, 
  {name: "img-bg-5.jpg", url: bg5}, 
  {name: "img-bg-6.jpg", url: bg6}
];
const imagesWithId = imagesArr.map((img) => ({ src: img.url, name: img.name, imgId: nanoid() }));

export default function HeroBannerModal() {

  const userState = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState(userState.heroBannerImage);
  const handleImageChange = (e) => {
    setInputValue(e.target);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const heroImgObject = {
     // url: inputValue.value,
      name: inputValue.dataset.imagename
    }

    dispatch(heroImageUpdated({ heroBannerImage: {...heroImgObject} }));
    dispatch(modalClosed()); 
  };

  return (
    <>
      <ModalTitle>Sélectionner une photo d’arrière plan</ModalTitle>
      <ModalSubTitle>
        Personnalisez votre espace souvenirs avec la photo d’arrière plan de votre choix parmi une sélection :
      </ModalSubTitle>
      <form noValidate onSubmit={handleSubmit}>
        <div className="image-radios-wrapper">
          {imagesWithId.map(({ src, imgId, name }) => {
            return (
              <FormInput
                key={imgId}
                id={imgId}
                wrapperClass="input-wrapper--radio"
                name="hero_banner_image"
                imageName={name}
                labelImage={src}
                value={src}
                checked={inputValue === src}
                onInputChange={handleImageChange}
                type="radio"
              />
            );
          })}
        </div>
        <Button type="submit" onClickAction={handleSubmit} btnClass="bg-current mt-30">
          <span className="button-text">Valider cette photo</span>
          <span className="separator">&nbsp;</span>
          <Icon name="next" iconClass="white-icon" />
        </Button>
      </form>
    </>
  );
}
