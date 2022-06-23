import classNames from "classnames";
import React from "react";

export default function Switch({
  isLoading,
  handleSwitch,
  messageId,
  isChecked,
}) {
  const handleswitch = () => {
    handleSwitch(messageId);
  };

  return (
    <div
      className={classNames("switch-wrapper", isLoading && "loading-status")}
    >
      <span>{isChecked ? "Publié" : "Dépublié"}</span>
      <label className="switch" data-testid="switchCheck">
        <input
          disabled={isLoading}
          type="checkbox"
          checked={isChecked}
          onChange={handleswitch}
        />
        <span className="slider"></span>
      </label>
    </div>
  );
}
