import React from 'react';

/* import './tabpanel.scss'; */

export default function TabPanel({name, children}) {
  return (
    <div
      tabIndex="0"
      role="tabpanel"
      className="tab-panel"
      id={`${name.toLowerCase()}-tab`}
      aria-labelledby={name.toLowerCase()}
    >{children}</div>
  )
}
