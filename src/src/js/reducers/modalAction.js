export const MODAL_CLOSED = "MODAL_CLOSED";
export const MODAL_OPENED = "MODAL_OPENED";

export const modalOpened = (payload = {}) => ({ type: MODAL_OPENED, payload });
export const modalClosed = () => ({ type: MODAL_CLOSED });
