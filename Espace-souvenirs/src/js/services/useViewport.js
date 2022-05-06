import React, { useContext } from 'react';
import { ViewportContext } from '../context/viewportProvider';

export default function useViewport() {
  const { width, height } = useContext(ViewportContext);
  return { width, height };
}
