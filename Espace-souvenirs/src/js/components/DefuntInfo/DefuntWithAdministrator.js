import React from 'react';
import DefuntInfos from './DefuntInfos';
import SectionAdministators from './SectionAdministators';

export default function DefuntWithAdministrator() {
  return (
    <div className="defunt-administrator-wrapper">
      <DefuntInfos />
      <SectionAdministators />
    </div>
  );
}
