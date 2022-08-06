import React, { useContext } from "react";

import { ViewportContext } from "../providers/viewportProvider";

export default function useViewport() {
  const { width, height } = useContext(ViewportContext);
  return { width, height };
}
