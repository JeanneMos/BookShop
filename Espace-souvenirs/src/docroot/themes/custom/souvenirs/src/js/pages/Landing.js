import React, { useEffect } from "react";
import Layout from "../layouts/Layout";
import Search from "../components/Search/Search";
import scrollSmoothToElement from "../services/scrollSmoothToElement";

export default function Landing() {
  useEffect(() => {
    document.title = "Landing page";
    scrollSmoothToElement();
  }, []);

  return (
    <Layout>
      <div className="landing-wrapper">
        <Search />
      </div>
    </Layout>
  );
}
