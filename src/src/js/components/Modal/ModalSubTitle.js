import React from "react";

export default function ModalSubTitle({
  children,
  subtitleClass = "modal-subtitle",
}) {
  return <p className={subtitleClass}>{children}</p>;
}
