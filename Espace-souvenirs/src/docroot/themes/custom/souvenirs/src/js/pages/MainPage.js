import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import useGetQuery from "../services/useGetQuery";

import { espaceInfoUpdated, isAdminSet } from "../context/userSlice";
import { administratorsRetrieved } from "../context/administratorSlice";
import { biographyUpdated } from "../context/biographySlice";

import ContentWrapper from "../components/ContentWrapper/ContentWrapper";
import InfoWrapper from "../components/DefuntInfo/InfoWrapper";
import Layout from "../layouts/Layout";
import scrollSmoothToElement from "../services/scrollSmoothToElement";
import FullPageLoader from "../components/Loader/FullPageLoader";
import NoMatch from "./NoMatch";

import { espaceSouvenirs } from "../constants";
import { getMainAdminESEntities } from "../services/getGestionnairePrincipalES";
import { isEmptyArray } from "../services/formatting";
import { administrators } from "../services/fakeAdministrators";

export default function MainPage() {
  const userState = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const params = useParams();

  const { data, error, isFetching } = useGetQuery({
    key: `espace-souvenir-${params.espaceId}`,
    API: `${espaceSouvenirs}/${params.espaceId}`,
    staleTime: 10000,
    cacheTime: Infinity,
  });

  const structuredData = (retrievedData) => {
    const fieldMarque =
      retrievedData?.field_es_marque?.field_marque_prestation || "";
    // fieldMarque[0].field_prest_image = [{url: `${window.location.origin}/themes/custom/souvenirs/src/assets/images/transversal/trees-desktop.jpg`}]
    const infos = {
      defunt: {
        civility: retrievedData?.field_es_civility,
        firstName: retrievedData?.field_es_name,
        lastName: retrievedData?.field_es_surname?.toUpperCase(),
        birthDate: retrievedData?.field_es_birthday,
        deathDate: retrievedData?.field_es_death_date,
        birthName: retrievedData?.field_nom_de_naissance?.toUpperCase(),
      },
      prestations: [...fieldMarque],
      homageText: retrievedData?.field_es_homage,
      agency: retrievedData?.field_es_agency,
    };
    return infos;
  };
  const structuredBiography = (retrievedData) => {
    const biography = {
      biography: retrievedData?.field_es_bio?.field_bio_story,
      isBiographyEdited: retrievedData?.field_es_bio?.field_bio_custom || false,
    };
    return biography;
  };
  const structuredAdministrators = (retrievedData) => {
    const receivedAdministrators = {
      administrators: [...retrievedData],
    };
    return receivedAdministrators;
  };
  useEffect(() => {
    document.title = "Espace Souvenirs";
    scrollSmoothToElement();

    if (data && !isEmptyArray(data)) {
      dispatch(espaceInfoUpdated(structuredData(data)));
      dispatch(biographyUpdated(structuredBiography(data)));
      dispatch(
        administratorsRetrieved(structuredAdministrators(administrators)),
      );
      if (userState.isLogged && getMainAdminESEntities().length) {
        dispatch(
          isAdminSet({
            isAdmin: getMainAdminESEntities().includes(params.espaceId),
          }),
        );
      }
    }
  }, [data]);

  if (isFetching) return <FullPageLoader />;
  if (error || data.length === 0) return <NoMatch />;

  return (
    <Layout>
      <InfoWrapper />
      <ContentWrapper />
    </Layout>
  );
}
