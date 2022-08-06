import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { biographyUpdated } from "../providers/biographySlice";
import { espaceInfoUpdated } from "../providers/globalInfoSlice";
import { decoded } from "./formatting";
import scrollSmoothToElement from "./scrollSmoothToElement";
import useGetQuery from "./useGetQuery";

export default function useGetMainPageContent({
  espaceId,
  getEspaceSouvenirsApi,
}) {
  const [hasError, setHasError] = useState(false);
  const dispatch = useDispatch();
  const { data, error, isFetching } = useGetQuery({
    key: `espace-souvenir-${espaceId}`,
    API: `${getEspaceSouvenirsApi}/${espaceId}`,
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
            civility: sentData?.field_es_avis?.defunt_fk?.civilite_fk,
            firstName: sentData?.field_es_avis?.defunt_fk?.prenom,
            lastName: sentData?.field_es_avis?.defunt_fk?.nom,
            maidenName: sentData?.field_es_avis?.defunt_fk?.nomjeunefille,
            zipCode: sentData?.field_es_avis?.defunt_fk?.codepostal,
            city: sentData?.field_es_avis?.defunt_fk?.commune,
            photo: sentData?.field_es_avis?.defunt_fk?.photo,
            publicationDate: sentData?.field_es_avis?.datepublication,
            publicationStatus: sentData?.field_es_avis?.statut_fk?.libelle,
            fleursAutorise: sentData?.field_es_avis?.fleursautorise,
            urlAvis: sentData?.field_es_avis?.url_avis_public,
            ceremonies: sentData?.field_es_avis?.lieux,
            urlDetailsObituary: sentData?.field_es_avis?.url_emc_detail,
            urlUpdateObituary: sentData?.field_es_avis?.url_emc_update,
            nombreCondoleances: sentData?.field_es_avis?.nombreCondoleances,
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
      homageText: JSON.stringify(sentData?.field_es_homage),
      heroBannerImage: {
        name: sentData?.field_es_banner,
      },
      agency: sentData?.field_es_agency,
      manager: sentData?.manager,
    };
    return infos;
  };

  const setStructuredBiography = (sentData) => {
    const biography = {
      biography: decoded(sentData?.field_es_bio?.field_bio_story),
      isBiographyEdited: sentData?.field_es_bio?.field_bio_custom || false,
    };
    return biography;
  };

  useEffect(() => {
    document.title = "Espace Hommage";

    scrollSmoothToElement();
    if (data?.error || typeof data === "string") {
      setHasError(true);
    }
    if (data && !data?.error) {
      setHasError(false);
      dispatch(espaceInfoUpdated(setStructuredData(data)));
      dispatch(biographyUpdated(setStructuredBiography(data)));
    }
  }, [data]);

  return { data, isFetching, error, hasError };
}
