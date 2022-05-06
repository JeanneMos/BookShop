import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import Icon from '../Icons/Icon';

export default function ImagePreview({
  source, imgName, imgSize, deletePhoto, modal,
}) {
  const imageSize = imgSize ? Math.ceil(imgSize / 1000): null;
  return (
    <div className={classNames('image-preview-wrapper', modal && 'image-preview-wrapper--modal')}>
      {modal && <span>Photo</span>}
      <div className="image-preview">
        <img alt="" className="image-preview-image" width="200" height="200" src={source} />
      </div>
      {imgName && <span className="preview-description--bold">{imgName}</span>}
      {imageSize && <span className="preview-description">{imageSize}Kb</span>}
      <Button 
        ariaLabel={`supprimer ${imgName}`} 
        type="button" 
        btnClass="delete-image-button" 
        onClickAction={() => deletePhoto(imgName)}>
        <Icon name="delete" iconClass="delete-image-icon" />
      </Button>
    </div>
  );
}

ImagePreview.propTypes = {
  source: PropTypes.string.isRequired,
  imgName: PropTypes.string,
  deletePhoto: PropTypes.func.isRequired,
  imgSize: PropTypes.number,
  modal: PropTypes.bool
};
