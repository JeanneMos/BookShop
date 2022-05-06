import React, { useEffect } from "react";
import Layout from "../layouts/Layout";
import StyledLink from "../components/Link/Link";
import scrollSmoothToElement from "../services/scrollSmoothToElement";

export default function NoMatch() {
  useEffect(() => {
    document.title = "Espace Souvenirs";
    scrollSmoothToElement();
  }, []);
  return (
    <Layout>
      <div className="layout-content">
        <h1>Page introuvable (404)</h1>
        <p>Cette page est introuvable ou a été déplacée.</p>
        <p>
          Utilisez le menu pour naviguer dans les différentes rubriques du site.
        </p>
        <StyledLink linkTo="/" linkClass="bg-current">
          RETOUR À L&apos;ACCUEIL
        </StyledLink>
      </div>
    </Layout>
  );
}
