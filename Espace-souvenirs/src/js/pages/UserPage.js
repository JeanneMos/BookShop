import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../layouts/Layout";

export default function UserPage() {
  const { id } = useParams();

  return (
    <Layout>
      <div className="layout-content">
        <p>
          User id:
          {id}
        </p>
        <a href={`/user/${id}/edit`} className="bg-current">
          Edit
        </a>
      </div>
    </Layout>
  );
}
