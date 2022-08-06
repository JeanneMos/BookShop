import PropTypes from "prop-types";
import React from "react";

import { accueilPage, biographiePage, messagesPage } from "../../constants";
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

export default function MainPageViewsContent({ name, handleActiveTab }) {
  if (name === accueilPage) {
    return (
      <React.Suspense fallback={<MessagesLoader />}>
        <TabPanel name={name}>
          <Accueil name={name} handleActiveTab={handleActiveTab} />
        </TabPanel>
      </React.Suspense>
    );
  }
  if (name === biographiePage) {
    return (
      <React.Suspense fallback={<MessagesLoader />}>
        <TabPanel name={name}>
          <Biography name={name} />
        </TabPanel>
      </React.Suspense>
    );
  }
  if (name === messagesPage) {
    return (
      <React.Suspense fallback={<MessagesLoader />}>
        <TabPanel name={name}>
          <Messages name={name} />
        </TabPanel>
      </React.Suspense>
    );
  }
  return (
    <TabPanel name={name}>
      <h1>{name}</h1>
    </TabPanel>
  );
}

MainPageViewsContent.defaultProps = {
  contentBlock: null,
};

MainPageViewsContent.propTypes = {
  name: PropTypes.string.isRequired,
  handleActiveTab: PropTypes.func,
};
