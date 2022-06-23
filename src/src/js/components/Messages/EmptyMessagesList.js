import React from "react";

export default function EmptyMessagesList() {
  return (
    <div className="messages-wrapper">
      <p className="messages-empty-text" data-testid="emptyMessageList">
        Il n&apos;y a pas encore de messages sur cet Espace Souvenirs
      </p>
    </div>
  );
}
