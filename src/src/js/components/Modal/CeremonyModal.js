import React, { useState } from "react";

import CeremonyForm from "../Forms/CeremonyForm";
import ModalTitle from "./ModalTitle";

export default function CeremonyModal() {
  const [error, setError] = useState(null);

  return (
    <>
      <ModalTitle>Ajouter un évènement</ModalTitle>
      {error && <p className="upload-error-message">{error}</p>}
      <CeremonyForm />
    </>
  );
}
