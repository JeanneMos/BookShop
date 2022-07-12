import React, { useEffect } from "react";

import Search from "../components/Search/Search";
import TemporaryMessage from "../components/TemporaryMessage/TemporaryMessage";
import Layout from "../layouts/Layout";
import scrollSmoothToElement from "../services/scrollSmoothToElement";

export default function Landing() {
  useEffect(() => {
    document.title = "Landing page";
    scrollSmoothToElement();
  }, []);

  return (
    <Layout showLogin={false}>
      <div className="landing-wrapper">
        {/* <Search /> */}
        <TemporaryMessage />
      </div>
    </Layout>
  );
}
