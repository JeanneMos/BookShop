import React from "react";
import { useSelector } from "react-redux";

import Administrator from "./Administrator";

export default function AdministratorsList() {
  const administratorState = useSelector((state) => state.administrator);

  return (
    <ul className="administrators-list">
      {administratorState.currentUser && administratorState.isAdmin && (
        <Administrator
          key={administratorState.currentUser.email}
          current={true}
          admin={administratorState.currentUser}
        />
      )}
    </ul>
  );
}
