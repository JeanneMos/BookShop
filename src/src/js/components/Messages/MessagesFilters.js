import classNames from "classnames";
import React, { useEffect, useRef, useState } from "react";

import {
  allMessagesFilter,
  photoMessagesFilter,
  textMessagesFilter,
} from "../../constants";
import Button from "../Button/Button";
import Icon from "../Icons/Icon";

const events = ["mousedown", "touchstart"];
const filters = {
  allMessages: "Tous les messages",
  photoMessage: "Les messages photos",
  textMessage: "Les messages textes",
};
export default function MessagesFilters({
  handleFilterMessages,
  userFilter,
  messagesLength,
}) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState(userFilter);
  const dropdownRef = useRef();
  useEffect(() => {
    const handler = (event) => {
      const { current: el } = dropdownRef;
      const isClickAway = el && !el.contains(event.target);
      isClickAway && setDropdownOpen(false);
    };

    for (const eventName of events) {
      document.addEventListener(eventName, handler);
    }

    return () => {
      for (const eventName of events) {
        document.removeEventListener(eventName, handler);
      }
    };
  }, [dropdownRef]);

  const handleDropdownMenu = (e) => {
    const button = e.currentTarget;
    setDropdownOpen(!isDropdownOpen);
    if (button.nodeName === "BUTTON") {
      button.setAttribute("aria-expanded", !isDropdownOpen);
    }
  };

  const sendId = ({ target: { id } }) => {
    handleFilterMessages(id);
    setActiveFilter(id);
    setDropdownOpen(false);
  };

  return (
    <div
      ref={dropdownRef}
      className={classNames("dropdown dropdown-filters", {
        open: isDropdownOpen,
      })}
    >
      <span className="filters-display">Afficher</span>
      <button
        className="dropdown-toggle filters-button"
        onClick={handleDropdownMenu}
        type="button"
        id="dropdownMenu1"
        data-toggle="dropdown"
        aria-expanded="false"
      >
        <span className="mr-10">{filters[activeFilter]}</span>
        <Icon
          name="chevron"
          iconClass={classNames("toggle-menu-icon", {
            open: isDropdownOpen,
          })}
        />
      </button>
      <ul
        className={classNames("dropdown-menu filters-dropdown", {
          active: isDropdownOpen,
        })}
        data-testid="dropdownMessagesFilters"
      >
        <li>
          <Button
            btnClass={classNames("bg-transparent filter-button", {
              active: activeFilter === allMessagesFilter,
            })}
            id={allMessagesFilter}
            onClickAction={sendId}
          >
            Tous les messages
          </Button>
        </li>
        <li>
          <Button
            btnClass={classNames("bg-transparent filter-button", {
              active: activeFilter === photoMessagesFilter,
            })}
            id={photoMessagesFilter}
            onClickAction={sendId}
          >
            Les messages photos ({messagesLength.photos})
          </Button>
        </li>
        <li>
          <Button
            btnClass={classNames("bg-transparent filter-button", {
              active: activeFilter === textMessagesFilter,
            })}
            id={textMessagesFilter}
            onClickAction={sendId}
          >
            Les messages textes ({messagesLength.text})
          </Button>
        </li>
      </ul>
    </div>
  );
}
