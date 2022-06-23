import React from "react";
import { useSelector } from "react-redux";

import Button from "../Button/Button";
import Icon from "../Icons/Icon";

const thanks = true;
export default function Acknowledgements() {
  const administratorState = useSelector((state) => state.administrator);

  if (thanks) {
    return (
      <div className="acknowledgement-wrapper">
        <h2 className="content-heading-2">Remerciements</h2>
        {administratorState.isAdmin && (
          <Button type="button" btnClass="edit-text-button bg-current">
            <Icon name="devis" iconClass="edit-text-icon" />
          </Button>
        )}
        <div className="content-acknowledgement">
          <p>
            Chère famille, chers amis,
            <br />
            Cet espace privé est destiné à recueillir vos témoignages : un
            message, un souvenir, une anecdote ou une photo, illustrant un
            moment de vie. Merci pour votre précieux soutien.
          </p>
        </div>
      </div>
    );
  }
}
