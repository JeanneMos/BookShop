import DOMPurify from "isomorphic-dompurify";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import FullPageLoader from "../components/Loader/FullPageLoader";
import Layout from "../layouts/Layout";
import scrollSmoothToElement from "../services/scrollSmoothToElement";
import useGetQuery from "../services/useGetQuery";
import NoMatch from "./NoMatch";

const sanitizedData = (htmlToPurify) => {
  if (htmlToPurify) {
    return {
      __html: DOMPurify.sanitize(htmlToPurify),
    };
  }
  return null;
};

export default function BasePage() {
  const { pathname } = useLocation();
  const { data, error, isFetching } = useGetQuery({
    key: `basePage-${pathname}`,
    API: `/es/get-page?url=${pathname}`,
    staleTime: 10000,
    cacheTime: Infinity,
  });

  useEffect(() => {
    if (data?.title) {
      document.title = `${data.title} | Espace Hommage`;
    }
    scrollSmoothToElement();
  }, [data]);

  if (data?.status || error || (data && !data?.publish)) return <NoMatch />;
  if (isFetching) return <FullPageLoader />;
  return (
    <Layout showLogin={false}>
      <div className="base-page-wrapper">
        {data && data.body && data.publish && (
          <div dangerouslySetInnerHTML={sanitizedData(data.body)} />
        )}
      </div>
    </Layout>
  );
}
