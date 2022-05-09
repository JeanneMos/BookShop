import React from "react";

export default function ModalTitle({
  titleModalClass = "modal-title",
  children,
}) {
  return <h2 className={titleModalClass}>{children}</h2>;
}
