import React from "react"
import Layout from "../Layout/Layout"

const ConfirmationPage = () => {
  return (
    <Layout>
      <div role="status">
        <p data-testid="confirmationMessage">
          Nous vous remercions pour votre commande. Les livres sont en cours
          d&apos;envoi.
        </p>
      </div>
    </Layout>
  )
}
export default ConfirmationPage
