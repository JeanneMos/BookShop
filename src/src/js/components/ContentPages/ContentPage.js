import PropTypes from "prop-types";
import React from "react";

import { accueil, biographie, messages } from "../../constants";
import MessagesLoader from "../Loader/MessagesLoader";
import TabPanel from "./TabPanel";

const Accueil = React.lazy(() =>
  import(/* webpackChunkName: "Accueil" */ "./Accueil"),
);
const Biography = React.lazy(() =>
  import(/* webpackChunkName: "Biography" */ "./Biography"),
);
const Messages = React.lazy(() =>
  import(/* webpackChunkName: "Messages" */ "./Messages"),
);

export default function ContentPage({ name, handleActiveTab }) {
  if (name === accueil) {
    return (
      <React.Suspense fallback={<MessagesLoader />}>
        <Accueil name={name} handleActiveTab={handleActiveTab} />
      </React.Suspense>
    );
  }
  if (name === biographie) {
    return (
      <React.Suspense fallback={<MessagesLoader />}>
        <Biography name={name} />
      </React.Suspense>
    );
  }
  if (name === messages) {
    return (
      <React.Suspense fallback={<MessagesLoader />}>
        <Messages name={name} />
        {/* <MessagesLoader /> */}
      </React.Suspense>
    );
  }
  return (
    <TabPanel name={name}>
      <h1>{name}</h1>
    </TabPanel>
  );
}

ContentPage.defaultProps = {
  contentBlock: null,
};

ContentPage.propTypes = {
  name: PropTypes.string.isRequired,
  handleActiveTab: PropTypes.func,
};
