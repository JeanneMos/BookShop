import React from "react";
import { useSelector } from "react-redux";

import { decoded, textWithBreaks } from "../../services/formatting";

export default function BiographyText() {
  const biographyState = useSelector((state) => state.biography);

  return (
    <div className="biography-wrapper">
      <p className="biography-body" data-testid="biographyText">
        {textWithBreaks(decoded(biographyState?.biography))}
      </p>
    </div>
  );
}
