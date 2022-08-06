import React from "react";
import { useParams } from "react-router-dom";

import InfoWrapper from "../components/DefuntInfo/InfoWrapper";
import FullPageLoader from "../components/Loader/FullPageLoader";
import MainPageViews from "../components/MainPageViews/MainPageViews";
import { getEspaceSouvenirsApi } from "../constants";
import Layout from "../layouts/Layout";
import useGetMainPageContent from "../services/useGetMainPageContent";
import NoMatch from "./NoMatch";

export default function MainPage() {
  const params = useParams();
  const { data, isFetching, error, hasError } = useGetMainPageContent({
    espaceId: params.espaceId,
    getEspaceSouvenirsApi,
  });

  if (isFetching) return <FullPageLoader />;
  if (error || hasError || data?.length === 0) return <NoMatch />;

  return (
    <Layout>
      <InfoWrapper />
      <MainPageViews />
    </Layout>
  );
}
