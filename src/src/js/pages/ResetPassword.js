import React, { useEffect } from "react";

import ResetPasswordForm from "../components/Forms/ResetPasswordForm";
import Layout from "../layouts/Layout";
import scrollSmoothToElement from "../services/scrollSmoothToElement";

export default function ResetPassword() {
  useEffect(() => {
    document.title = "Nouveau mot de passe";
    scrollSmoothToElement();
  }, []);

  return (
    <Layout>
      <div className="reset-password-wrapper">
        <ResetPasswordForm />
      </div>
    </Layout>
  );
}
