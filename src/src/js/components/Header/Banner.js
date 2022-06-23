import React from "react";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <Link to="/" className="banner-link" data-testid="bannerLink">
      Espace Souvenirs
    </Link>
  );
}
