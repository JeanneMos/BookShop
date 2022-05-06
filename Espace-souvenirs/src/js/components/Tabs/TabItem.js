import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { administratorEdited } from '../../context/administratorSlice';
/* import './navigation.scss'; */

export default function TabItem({ tabInfos, activeMobileTab }) {
  const dispatch = useDispatch();
  const handleTabsClick = () => {
    tabInfos.handleActiveTab(tabInfos.id)
    dispatch(administratorEdited({isEditingAdministator:false}))
  }
  
  return (
    <button
      type="button"
      role="tab"
      className={classNames('tab-item', {
        active: tabInfos.activeLink === tabInfos.id,
      })}
      hidden={activeMobileTab === tabInfos.id}
      aria-selected={tabInfos.activeLink === tabInfos.id}
      aria-controls={`${tabInfos.id}-tab`}
      data-testid={tabInfos.id}
      id={tabInfos.id}
      onClick={handleTabsClick}
    >
      {tabInfos.id}
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
