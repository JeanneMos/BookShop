import React from 'react';
import PropTypes from 'prop-types';
import TabPanel from './TabPanel';

import FullPageLoader from "../Loader/FullPageLoader"
import {accueil, biographie, messages} from '../../constants'

const Accueil = React.lazy(() => import(/* webpackChunkName: "Accueil" */'./Accueil'));
const Biography = React.lazy(() => import(/* webpackChunkName: "Biography" */'./Biography'));
const Messages = React.lazy(() => import(/* webpackChunkName: "Messages" */'./Messages'));

export default function ContentPage({ name, handleActiveTab }) {

  if (name === accueil) {
    return <React.Suspense fallback={<FullPageLoader />}>
      <Accueil name={name} handleActiveTab={handleActiveTab} />
    </React.Suspense>
  };
  if (name === biographie) {
    return <React.Suspense fallback={<FullPageLoader />}><Biography name={name} /></React.Suspense>
  };
  if (name === messages) {
    return <React.Suspense fallback={<FullPageLoader />}><Messages name={name} /></React.Suspense>
  };
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
  handleActiveTab: PropTypes.func
};
