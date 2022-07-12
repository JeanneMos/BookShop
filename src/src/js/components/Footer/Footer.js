import React from "react";
import { Link } from "react-router-dom";

import { errorMessageNetwork } from "../../constants";

function Footer({ data, isFetching, error }) {
  const displayMenu = (items) => {
    return items.map((item) => {
      return (
        <li key={item.title}>
          <Link to={item.url}>{item.title}</Link>
        </li>
      );
    });
  };
  return (
    <footer>
      {isFetching ? "Fetching" : null}
      {isNaN(data) ||
        (error && <p className="fetch-error-message">{errorMessageNetwork}</p>)}
      {data && data.length ? (
        <ul className="footer-nav" data-testid="footerFetchedLinks">
          {displayMenu(data)}
        </ul>
      ) : null}
    </footer>
  );
}

export default Footer;
