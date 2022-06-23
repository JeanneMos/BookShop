import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import ContentWrapper from "../components/ContentWrapper/ContentWrapper";
import InfoWrapper from "../components/DefuntInfo/InfoWrapper";
import FullPageLoader from "../components/Loader/FullPageLoader";
import { getEspaceSouvenirsApi } from "../constants";
import { biographyUpdated } from "../context/biographySlice";
import { espaceInfoUpdated } from "../context/globalInfoSlice";
import Layout from "../layouts/Layout";
import { isEmptyArray } from "../services/formatting";
import scrollSmoothToElement from "../services/scrollSmoothToElement";
import useGetQuery from "../services/useGetQuery";
import NoMatch from "./NoMatch";

export default function MainPage() {
  const administratorState = useSelector((state) => state.administrator);
  const [hasError, setHasError] = useState(false);
  const dispatch = useDispatch();
  const params = useParams();

  const { data, error, isFetching } = useGetQuery({
    key: `espace-souvenir-${params.espaceId}`,
    API: `${getEspaceSouvenirsApi}/${params.espaceId}`,
    staleTime: 10000,
    cacheTime: Infinity,
  });

  const getDefuntImageName = (retrievedData) => {
    const defuntImageUrl = retrievedData
      ? decodeURIComponent(retrievedData?.url).split("/")
      : null;

    const defuntImageName = defuntImageUrl
      ? defuntImageUrl[defuntImageUrl.length - 1]
      : null;
    return defuntImageName;
  };

  const getDefuntImageUrl = (retrievedData) => {
    const imageUrl = retrievedData ? retrievedData.url : null;
    return imageUrl;
  };
  const setDefuntImage = (retrievedData) => {
    return retrievedData
      ? {
          name: getDefuntImageName(retrievedData),
          url: getDefuntImageUrl(retrievedData),
        }
      : null;
  };

  const setStructuredData = (sentData) => {
    const fieldMarque =
      sentData?.field_es_marque?.field_marque_prestation || "";
    const obituary =
      (Array.isArray(sentData?.field_es_avis) &&
        sentData?.field_es_avis.length > 0) ||
      (typeof sentData?.field_es_avis === "object" &&
        Object.keys(sentData?.field_es_avis).length > 0)
        ? {
            civility: sentData?.field_es_avis?.defunt_fk?.civilite_fk?.libelle,
            firstName: sentData?.field_es_avis?.defunt_fk?.prenom,
            lastName: sentData?.field_es_avis?.defunt_fk?.nom,
            maidenName: sentData?.field_es_avis?.defunt_fk?.nomjeunefille,
            zipCode: sentData?.field_es_avis?.defunt_fk?.codepostal,
            city: sentData?.field_es_avis?.defunt_fk?.commune,
            photo: sentData?.field_es_avis?.defunt_fk?.photo,
            publicationDate: sentData?.field_es_avis?.datepublication,
            publicationStatus: sentData?.field_es_avis?.statut_fk?.libelle,
            fleursAutorise: sentData?.field_es_avis?.fleursautorise,
            urlAvis: sentData?.field_es_avis?.url,
            ceremonies: sentData?.field_es_avis?.lieux,
          }
        : null;
    const infos = {
      defunt: {
        civility: sentData?.field_es_civility,
        firstName: sentData?.field_es_name,
        lastName: sentData?.field_es_surname?.toUpperCase(),
        birthDate: sentData?.field_es_birthday,
        deathDate: sentData?.field_es_death_date,
        birthName: sentData?.field_nom_de_naissance?.toUpperCase(),
      },
      obituary,
      prestations: [...fieldMarque],
      marque: {
        name: sentData?.field_es_marque?.field_marque_system_name,
        urlBoutique: sentData?.field_es_marque?.field_marque_boutique,
        logo: sentData?.field_es_marque?.field_marque_logo,
      },
      defuntImage: setDefuntImage(sentData?.field_es_profile_image),
      homageText: sentData?.field_es_homage,
      agency: sentData?.field_es_agency,
      manager: sentData?.manager,
    };
    return infos;
  };
  const setStructuredBiography = (sentData) => {
    const biography = {
      biography: sentData?.field_es_bio?.field_bio_story,
      isBiographyEdited: sentData?.field_es_bio?.field_bio_custom || false,
    };
    return biography;
  };
  useEffect(() => {
    document.title = "Espace Souvenirs";
    //scrollSmoothToElement();
    if (data?.error || typeof data === "string") {
      setHasError(true);
    }
    if (data && !data?.error) {
      setHasError(false);
      dispatch(espaceInfoUpdated(setStructuredData(data)));
      dispatch(biographyUpdated(setStructuredBiography(data)));
    }
  }, [data]);

  if (isFetching) return <FullPageLoader />;
  if (error || hasError || data.length === 0) return <NoMatch />;

  return (
    <Layout>
      <InfoWrapper />
      <ContentWrapper />
    </Layout>
  );
}
