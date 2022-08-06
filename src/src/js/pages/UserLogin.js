import React, { useEffect } from "react";

import LoginUserForm from "../components/Forms/LoginUserForm";
import Layout from "../layouts/Layout";
import scrollSmoothToElement from "../services/scrollSmoothToElement";

/* import './landing.scss'; */

export default function UserLogin() {
  useEffect(() => {
    document.title = "Page d'utilisateur";
    scrollSmoothToElement();
  }, []);
  return (
    <Layout showLogin={false}>
      <div className="user-admin-login">
        <LoginUserForm />
      </div>
    </Layout>
  );
}
