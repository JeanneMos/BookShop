import React, { useEffect } from "react";
import Layout from "../layouts/Layout";
import LoginUserForm from "../components/Forms/LoginUserForm";
import scrollSmoothToElement from "../services/scrollSmoothToElement";

/* import './landing.scss'; */

export default function UserLogin() {
  useEffect(() => {
    document.title = "Page d'utilisateur";
    scrollSmoothToElement();
  }, []);
  return (
    <Layout>
      <div className="user-admin-login">
        <LoginUserForm />
      </div>
    </Layout>
  );
}
