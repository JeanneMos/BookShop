export const USER_LOGGED_IN = "USER_LOGGED_IN";
export const USER_LOGGED_OUT = "USER_LOGGED_OUT";
export const ESPACE_INFORMATION_UPDATED = "ESPACE_INFORMATION_UPDATED";
export const DEFUNT_IMAGE_UPDATED = "DEFUNT_IMAGE_UPDATED";
export const HERO_IMAGE_UPDATED = "HERO_IMAGE_UPDATED";
export const HOMAGE_TEXT_UPDATED = "HOMAGE_TEXT_UPDATED";
export const DEFUNT_IMAGE_DELETED = "DEFUNT_IMAGE_DELETED";
export const MESSAGE_PICTURE_UPDATED = "MESSAGE_PICTURE_UPDATED";
export const MESSAGE_PICTURE_DELETED = "MESSAGE_PICTURE_DELETED";
export const ADD_MESSAGE = "ADD_MESSAGE";
export const MESSAGE_UNPUBLISHED = "MESSAGE_UNPUBLISHED";
export const MESSAGE_PUBLISHED = "MESSAGE_PUBLISHED";
export const BIOGRAPHY_UPDATED = "BIOGRAPHY_UPDATED";
export const BIOGRAPHY_DELETED = "BIOGRAPHY_DELETED";
export const BIOGRAPHY_PHOTO_DELETED = "BIOGRAPHY_PHOTO_DELETED";
export const BIOGRAPHY_PHOTO_ADDED = "BIOGRAPHY_PHOTO_ADDED";

export const espaceInfoUpdated = (payload = {}) => ({
  type: ESPACE_INFORMATION_UPDATED,
  payload,
});
export const imageUpdated = (payload = {}) => ({
  type: DEFUNT_IMAGE_UPDATED,
  payload,
});
export const heroImageUpdated = (payload = {}) => ({
  type: HERO_IMAGE_UPDATED,
  payload,
});
export const homageTextUpdated = (payload = {}) => ({
  type: HOMAGE_TEXT_UPDATED,
  payload,
});
export const imageDeleted = () => ({ type: DEFUNT_IMAGE_DELETED });
export const messagePictureUpdated = (payload = {}) => ({
  type: MESSAGE_PICTURE_UPDATED,
  payload,
});
export const messagePictureDeleted = () => ({ type: MESSAGE_PICTURE_DELETED });
export const messageAdded = (payload = {}) => ({ type: ADD_MESSAGE, payload });
export const messageUnpublished = (payload = {}) => ({
  type: MESSAGE_UNPUBLISHED,
  payload,
});
export const messagePublished = (payload = {}) => ({
  type: MESSAGE_PUBLISHED,
  payload,
});
export const biographyUpdated = (payload = {}) => ({
  type: BIOGRAPHY_UPDATED,
  payload,
});
export const biographyDeleted = () => ({ type: BIOGRAPHY_DELETED });
export const biographyPhotoDeleted = (payload = {}) => ({
  type: BIOGRAPHY_PHOTO_DELETED,
  payload,
});
export const biographyPhotoAdded = (payload = {}) => ({
  type: BIOGRAPHY_PHOTO_ADDED,
  payload,
});
