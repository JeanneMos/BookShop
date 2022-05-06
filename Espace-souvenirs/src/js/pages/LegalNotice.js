import React, { useEffect } from "react";
import useGetQuery from "../services/useGetQuery";
import Layout from "../layouts/Layout";
import scrollSmoothToElement from "../services/scrollSmoothToElement";
import { APIJsonPlaceholder } from "../constants";

export default function LegalNotice() {
  const { data, isFetching, error } = useGetQuery({
    key: "posts",
    API: APIJsonPlaceholder,
    staleTime: 10000,
    cacheTime: 300000,
  });

  const displayPosts = (postsArray) => (
    <ul>
      {postsArray.map((post) => (
        <li key={post.id}>
          <p>{post.title}</p>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  );
  useEffect(() => {
    document.title = "Mentions légales";
    scrollSmoothToElement();
  }, []);
  return (
    <Layout>
      <div className="layout-content">
        <h1>Mentions légales</h1>
        {isFetching ? "Fetching" : null}
        {Number.isNaN(data) && (
          <p className="fetch-error-message">
            Nous avons rencontré une erreur, merci de réessayer plus tard
          </p>
        )}
        {data && data.length && displayPosts(data)}
      </div>
    </Layout>
  );
}
