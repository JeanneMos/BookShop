import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import InfoWrapper from "../components/DefuntInfo/InfoWrapper";
import FullPageLoader from "../components/Loader/FullPageLoader";
import MainPageViews from "../components/MainPageViews/MainPageViews";
import { getEspaceSouvenirsApi } from "../constants";
import { biographyUpdated } from "../context/biographySlice";
import { espaceInfoUpdated } from "../context/globalInfoSlice";
import Layout from "../layouts/Layout";
import { decoded } from "../services/formatting";
import scrollSmoothToElement from "../services/scrollSmoothToElement";
import useGetQuery from "../services/useGetQuery";
import NoMatch from "./NoMatch";

interface IRetrievedData {
  manager: {
    field_birth_date: string;
    field_user_civility?: string;
    field_user_email: string;
    field_user_name: string;
    field_user_phone?: string;
    field_user_surname: string;
    idUser: string;
    user_gp_entity: string[];
  };
  field_es_civility: string;
  field_es_surname: string;
  field_es_birth_name: string;
  field_es_name: string;
  field_es_profile_image: IDefuntImage | null;
  field_es_banner?: string;
  field_es_birthday: string;
  field_es_death_date: string;
  field_nom_de_naissance: string;
  field_es_marque: {
    field_marque_system_name: string;
    field_marque_boutique: string;
    field_marque_domain: string;
    field_marque_emc: boolean;
    field_marque_add_public: boolean;
    field_marque_logo?: string;
    field_marque_prestation?: [
      {
        field_prest_image: string;
        field_prest_titre: string;
        field_prest_description: string;
        field_prest_url: {
          url: string;
          title: string;
          attributes: {
            attributes: {
              activate_sso_link: number;
            };
            external: boolean;
          };
        };
      },
    ];
  };
  field_es_homage: string;
  field_es_bio: {
    field_bio_custom: boolean;
    field_bio_story: string;
    field_bio_photo?: [];
  };
  field_es_avis?: {
    defunt_fk?: {
      civilite_fk: {
        libelle: string;
      };
      prenom: string;
      nom: string;
      nomjeunefille?: string;
      codepostal: string;
      commune: string;
      photo: {
        url: string;
      };
    };
    datepublication: string;
    fleursautorise: boolean;
    statut_fk?: {
      libelle: string;
    };
    url_emc_detail: string;
    url_emc_update: string;
    url_avis_public: string;
    nombreCondoleances: number;
    lieux: [];
  };
  field_es_agency?: {
    agency_name: string;
    agency_address: string;
    agency_postal_code: string;
    agency_town: string;
    agency_phone: string;
    agency_url: string;
  };
  field_es_avis_id: string;
  field_es_admin: boolean;
  field_es_ville_naissance: string;
  field_es_cp_naissance: string;
  field_es_ville_deces: string;
  field_es_cp_deces: string;
}

interface IDefuntImage {
  name?: string;
  url: string;
}

export default function MainPage() {
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
  const setDefuntImage = (retrievedData: IDefuntImage | null) => {
    return retrievedData
      ? {
          name: getDefuntImageName(retrievedData),
          url: getDefuntImageUrl(retrievedData),
        }
      : null;
  };

  const setStructuredData = (sentData: IRetrievedData) => {
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

  if (isFetching) return <FullPageLoader />;
  if (error || hasError || data?.length === 0) return <NoMatch />;

  return (
    <Layout>
      <InfoWrapper />
      <MainPageViews />
    </Layout>
  );
}
