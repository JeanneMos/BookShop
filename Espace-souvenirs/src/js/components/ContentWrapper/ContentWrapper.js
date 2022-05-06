import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import ContentPage from "../ContentPages/ContentPage";
import FullPageLoader from "../Loader/FullPageLoader";
import TabItem from "../Tabs/TabItem";
import useViewport from "../../services/useViewport";
import { mobileBreakpoint } from "../../constants";
import { accueil, biographie, messages } from "../../constants";
import MobileTabs from "../Tabs/MobileTabs";
import DesktopTabs from "../Tabs/DesktopTabs";
/* import './contentWrapper.scss'; */

const AdministratorsEdit = React.lazy(() =>
  import(
    /* webpackChunkName: "AdministratorsEdit" */ "../ContentPages/AdministratorsEdit"
  ),
);

export default function ContentWrapper() {
  const userState = useSelector((state) => state.user);
  const biographyState = useSelector((state) => state.biography);
  const administratorState = useSelector((state) => state.administrator);

  const tabs = [
    { name: "Accueil", id: accueil, hasContent: true },
    { name: "Messages", id: messages, hasContent: true },
    {
      name: "Biographie",
      id: biographie,
      hasContent: userState?.isAdmin ? true : biographyState?.isBiographyEdited,
    },
    /*   { name: 'Vidéo Cérémonie', id: 'video_ceremonie', hasContent: true }, */
  ];
  const [activeTab, setActiveTab] = useState(accueil);
  const [hasUserClicked, setUserClicked] = useState(false);
  const contentBlock = useRef(null);

  const { width } = useViewport();

  const getTabsWithContent = () => tabs.filter((tab) => tab.hasContent);

  const handleActiveTab = (tabName) => {
    setActiveTab(tabName);
    setUserClicked(true);
  };
  const getTabs = () => {
    const arrayOfTabs = getTabsWithContent().map((tab) => {
      const tabInfos = {
        id: tab.id,
        activeLink: activeTab,
        handleActiveTab,
      };
      const activeMobileTab = width < mobileBreakpoint ? activeTab : null;
      return (
        <TabItem
          tabInfos={tabInfos}
          key={`tab_${tab.id}`}
          activeMobileTab={activeMobileTab}
        />
      );
    });
    return arrayOfTabs;
  };
  const handleDisplayedView = () => {
    if (
      (administratorState?.isEditingAdministator ||
        administratorState?.isEditingPersonalInfo) &&
      userState.isAdmin
    ) {
      return (
        <React.Suspense fallback={<FullPageLoader />}>
          <AdministratorsEdit />
        </React.Suspense>
      );
    }

    if (
      !administratorState?.isEditingAdministator &&
      !administratorState?.isEditingPersonalInfo
    ) {
      return (
        <ContentPage
          name={activeTab}
          handleActiveTab={handleActiveTab}
          contentBlock={hasUserClicked ? contentBlock : null}
        />
      );
    }
  };

  return (
    <>
      {width <= mobileBreakpoint ? (
        <MobileTabs activeTab={activeTab} hasUserClicked={hasUserClicked}>
          {getTabs()}
        </MobileTabs>
      ) : (
        <DesktopTabs activeTab={activeTab}>{getTabs()}</DesktopTabs>
      )}
      <div className="layout-content">{handleDisplayedView()}</div>
    </>
  );
}
