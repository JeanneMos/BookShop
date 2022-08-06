import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getCurrentUser } from "../../constants";
import {
  currentUserSet,
  isAdminSet,
  userLoggedIn,
  userLoggedOut,
} from "../../providers/administratorSlice";
import { modalOpened } from "../../providers/modalSlice";
import { getMainAdminESEntities } from "../../services/getGestionnairePrincipalES";
import useGetQuery from "../../services/useGetQuery";
import LoginLoader from "../Loader/LoginLoader";
import Banner from "./Banner";

const LogoutMenu = React.lazy(() =>
  import(/* webpackChunkName: "LogoutMenu" */ "./LogoutMenu"),
);
const LoginMenu = React.lazy(() =>
  import(/* webpackChunkName: "LoginMenu" */ "./LoginMenu"),
);

export default function Header({ showLogin }) {
  const administratorState = useSelector((state) => state.administrator);
  const dispatch = useDispatch();
  const { espaceId } = useParams();
  const handleLogIn = () => {
    dispatch(
      modalOpened({
        theme: "dark",
        hasCloseButton: true,
        modalType: "LoginModal",
      }),
    );
  };
  const { data, isFetching, error } = useGetQuery({
    key: "current-user",
    API: getCurrentUser,
    staleTime: 10000,
    cacheTime: Infinity,
  });

  useEffect(() => {
    if (!data || !data?.field_user_email) {
      dispatch(currentUserSet({ user: null }));
      dispatch(isAdminSet({ isAdmin: false }));
      dispatch(userLoggedOut());
    } else {
      dispatch(userLoggedIn());
      const {
        field_user_surname: lastName,
        field_user_name: firstName,
        field_user_phone: phone,
        field_user_email: email,
        field_user_civility: civility,
        user_gp_entity: gp_entities,
      } = data;
      const user = {
        lastName,
        firstName,
        phone,
        email,
        civility,
        gp_entities,
      };
      const isCurrentUserAdmin =
        getMainAdminESEntities(gp_entities).includes(espaceId);
      if (getMainAdminESEntities(gp_entities).length) {
        dispatch(
          isAdminSet({
            isAdmin: isCurrentUserAdmin,
          }),
        );
      }
      dispatch(currentUserSet({ user }));
    }
  }, [data]);

  return (
    <header>
      <Banner />
      {isFetching && showLogin && <LoginLoader />}
      {!isFetching && administratorState.isLogged && showLogin && (
        <React.Suspense fallback={<p>attendez...</p>}>
          <LogoutMenu />
        </React.Suspense>
      )}
      {!isFetching && !administratorState.isLogged && showLogin && (
        <React.Suspense fallback={<p>attendez...</p>}>
          <LoginMenu handleLogIn={handleLogIn} />
        </React.Suspense>
      )}
    </header>
  );
}
