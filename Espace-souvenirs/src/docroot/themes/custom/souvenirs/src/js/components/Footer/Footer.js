import React from "react";
import { Link } from "react-router-dom";

/* import './footer.scss'; */

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
        (error && (
          <p className="fetch-error-message">
            Nous avons rencontré une erreur, merci de réessayer plus tard
          </p>
        ))}
      {data && data.length && (
        <ul className="footer-nav" data-testid="footerFetchedLinks">
          {displayMenu(data)}
        </ul>
      )}
      <Link to="/main-page/1" style={{ marginLeft: "15px" }}>
        Contenu du ES
      </Link>
    </footer>
  );
}

export default Footer;
