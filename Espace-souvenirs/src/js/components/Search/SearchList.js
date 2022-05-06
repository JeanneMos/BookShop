import React from "react";
import PropTypes from "prop-types";
import Img from "Images/bg-images/img-bg.jpg";

export default function SearchList({ profiles }) {
  return (
    <ul className="search-results" data-testid="searchResults">
      {profiles.map((profile) => (
        <li className="search-result-item" key={`profile_${profile.id}`}>
          <img width="110" height="60" alt="" src={Img} />
          <div className="search-result-description">{profile.title}</div>
        </li>
      ))}
    </ul>
  );
}

SearchList.propTypes = {
  profiles: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
};
