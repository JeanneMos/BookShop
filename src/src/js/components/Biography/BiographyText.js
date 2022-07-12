import React from "react";
import { useSelector } from "react-redux";

import { decoded, sanitizedText } from "../../services/formatting";

export default function BiographyText() {
  const biographyState = useSelector((state) => state.biography);
  const parsedText = biographyState?.biography;
  return (
    <div className="biography-wrapper">
      <div className="biography-body" data-testid="biographyText">
        <div dangerouslySetInnerHTML={sanitizedText(decoded(parsedText))} />
      </div>
    </div>
  );
}
