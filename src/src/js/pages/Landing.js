import React, { useEffect } from "react";

import Search from "../components/Search/Search";
import Layout from "../layouts/Layout";
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
