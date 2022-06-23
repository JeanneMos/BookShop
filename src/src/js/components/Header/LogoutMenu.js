import axios from "axios";
import classNames from "classnames";
import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { mainMenu } from "../../constants";
import { userLoggedOut } from "../../context/administratorSlice";
import useGetQuery from "../../services/useGetQuery";
import Icon from "../Icons/Icon";
import StyledLink from "../Link/StyledLink";
import Loader from "../Loader/Loader";

export default function LogoutMenu() {
  const administratorState = useSelector((state) => state.administrator);
  const dispatch = useDispatch();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isLoader, setIsLoader] = useState(false);
  /*   const { data, error, isFetching } = useGetQuery({
    key: "main-menu",
    API: mainMenu,
    staleTime: 300000,
    cacheTime: Infinity,
  }); */

  const handleLogOut = () => {
    const currentWindow = window.location.pathname;
    const options = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      withCredentials: true,
    };
    setIsLoader(true);
    axios.post("/user/logout", null, options).then(() => {
      dispatch(userLoggedOut());
      window.location.reload();
    });
  };

  const handleDropdownMenu = (e) => {
    const button = e.currentTarget;
    setDropdownOpen(!isDropdownOpen);
    if (button.nodeName === "BUTTON") {
      button.setAttribute("aria-expanded", !isDropdownOpen);
    }
  };

  const getUserName = () => {
    const lastName = administratorState?.currentUser?.lastName || null;
    return lastName;
  };
  const getCivility = () => {
    const civility = administratorState?.currentUser?.civility || null;
    return civility;
  };

  /*   const getFetchedItems = (items) => {
    return items.map((item) => {
      return (
        <li key={item.title}>
          <StyledLink linkTo={item.url} linkClass="bg-transparent">
            {item.title}
          </StyledLink>
        </li>
      );
    });
  }; */

  return (
    <div
      className={classNames("dropdown", {
        open: isDropdownOpen,
      })}
    >
      <button
        className="dropdown-toggle loggedIn-button"
        onClick={handleDropdownMenu}
        type="button"
        id="dropdownMenu1"
        data-toggle="dropdown"
        aria-expanded="false"
        data-testid="logoutButton"
      >
        <Icon name="userfill" iconClass="user-icon" />

        <span className="user-login-username">
          <span className="user-login-welcome">Bonjour &nbsp;</span>
          {getCivility()} {getUserName()}
        </span>
        <Icon
          name="chevron"
          iconClass={classNames("toggle-menu-icon", {
            open: isDropdownOpen,
          })}
        />
      </button>
      <ul
        className={classNames("dropdown-menu", {
          active: isDropdownOpen,
        })}
        data-testid="dropdownMainMenu"
      >
        {/*         {data && data.length > 0 && getFetchedItems(data)} */}
        <li>
          <div className="button-loader-wrapper">
            <button
              data-testid="logoutLink"
              type="button"
              className="dropdown-item"
              onClick={handleLogOut}
            >
              <Icon name="logout" iconClass="logout-icon" />
              <span className="dropdown-item-text">Se déconnecter</span>
            </button>
            {isLoader && <Loader />}
          </div>
        </li>
      </ul>
    </div>
  );
}
