import PropTypes from "prop-types";
import React from "react";
import { useSelector } from "react-redux";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { footerMenu } from "../constants";
import useGetQuery from "../services/useGetQuery";

const Modal = React.lazy(() =>
  import(/* webpackChunkName: "Modal" */ "../components/Modal/Modal"),
);

export default function Layout({ children }) {
  const modalState = useSelector((state) => state.modal);

  const {
    data: footerData,
    error: footerErr,
    isFetching: footerFetching,
  } = useGetQuery({
    key: "footer",
    API: footerMenu,
    staleTime: 300000,
    cacheTime: Infinity,
  });

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer data={footerData} error={footerErr} isFetching={footerFetching} />
      {modalState.isOpen && <Modal theme={modalState.theme} />}
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
