import React, { useState } from "react";
import useGetQuery from "../../services/useGetQuery";
import SearchList from "./SearchList";
import { APIJsonPlaceholder } from "../../constants";
import Icon from "../Icons/Icon";
import Loader from "../Loader/Loader";

/* import './search.scss';
import '../Forms/forms.scss';
 */
export default function Search() {
  const [profiles, getProfiles] = useState([]);
  const [userInput, setUserInput] = useState("");

  const { data, error, isFetching } = useGetQuery({
    key: "posts",
    API: APIJsonPlaceholder,
    staleTime: 30000,
    cacheTime: Infinity,
  });

  const handleUserInput = ({ target }) => {
    setUserInput(target.value);
    if (target.value.length > 3 && data && data.length) {
      const searchedValues = data.filter((post) =>
        post.title.includes(target.value.toLowerCase()),
      );
      const firstItemsFromValues =
        searchedValues.length > 5 ? searchedValues.slice(0, 5) : searchedValues;
      getProfiles(firstItemsFromValues);
    } else {
      getProfiles([]);
    }
  };
  const handleSearch = (e) => {
    e.preventDefault();
  };
  return (
    <div className="search-wrapper">
      <form onSubmit={handleSearch} className="search-form">
        <fieldset>
          <legend>Recherche d&apos;un espace souvenirs</legend>
          <div className="search">
            <input
              data-testid="searchInput"
              type="search"
              placeholder="Rechercher le nom de votre proche disparu"
              value={userInput}
              onChange={handleUserInput}
            />
            <button type="submit" className="search-button">
              <Icon name="recherche" iconClass="search-icon" />
            </button>
          </div>
        </fieldset>
      </form>

      {isFetching ? <Loader position="center" /> : null}
      {error ? "Désolé il y a une erreur, merci de réessayer plus tard" : null}
      {Number.isNaN(data) && (
        <p className="fetch-error-message">
          Nous avons rencontré une erreur, merci de réessayer plus tard
        </p>
      )}
      {profiles && profiles.length ? <SearchList profiles={profiles} /> : null}
    </div>
  );
}
