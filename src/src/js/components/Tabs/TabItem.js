import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { messages } from "../../constants";
import { administratorEdited } from "../../context/administratorSlice";
import NewMessagesNumber from "../Messages/NewMessagesNumber";

export default function TabItem({ tabInfos, activeMobileTab }) {
  const messagesState = useSelector((state) => state.messages);
  const dispatch = useDispatch();
  const handleTabsClick = () => {
    tabInfos.handleActiveTab(tabInfos.id);
    dispatch(administratorEdited({ isEditingAdministator: false }));
  };
  const getMessageNumber = () => {
    if (
      tabInfos.id === messages &&
      messagesState.messagesNumber &&
      messagesState.messagesNumber > 0
    ) {
      return (
        <NewMessagesNumber
          number={messagesState.messagesNumber}
          numberClass="small"
        ></NewMessagesNumber>
      );
    }
    return null;
  };

  return (
    <button
      type="button"
      role="tab"
      className={classNames("tab-item", {
        active: tabInfos.activeLink === tabInfos.id,
      })}
      hidden={activeMobileTab === tabInfos.id}
      aria-selected={tabInfos.activeLink === tabInfos.id}
      aria-controls={`${tabInfos.id}-tab`}
      data-testid={tabInfos.id}
      id={tabInfos.id}
      onClick={handleTabsClick}
    >
      {tabInfos.id}&nbsp;{getMessageNumber()}
    </button>
  );
}
TabItem.defaultProps = {
  activeMobileTab: null,
};

TabItem.propTypes = {
  tabInfos: PropTypes.shape({
    id: PropTypes.string.isRequired,
    activeLink: PropTypes.string.isRequired,
    handleActiveTab: PropTypes.func.isRequired,
  }).isRequired,
  activeMobileTab: PropTypes.string,
};
