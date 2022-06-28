import React from "react"
import { PropTypes } from "prop-types"
import styledComponents from "../../StyledComponents/styledComponents"

const Search = ({ bookSearch }) => {
  const { GlobalSearchFieldset } = styledComponents  

  const searchEvent = (event) => {
      bookSearch(event.target.value)
  }
  return (
    <GlobalSearchFieldset data-testid="global-search">
      <label htmlFor="searchField">
       Recherche par titre:
      </label>
      <input
          type="search"
          placeholder="Titre du livre"
          id="searchField"
          name="search"
          onChange={searchEvent}
        />
    </GlobalSearchFieldset>
  )
}
Search.propTypes = {
  bookSearch: PropTypes.func,
}
Search.defaultProps = {
  bookSearch: null,
}
export default Search
