import React from "react"
import { PropTypes } from "prop-types"
import styledComponents from "../../Utilities/styledComponents"

const Search = ({ bookSearch }) => {
  const { GlobalSearchFieldset } = styledComponents
  // we begin searching after 3 characters and send the request to the parent
  const searchEvent = (event) => {
    if (event.target.value.length > 3) {
      bookSearch(event.target.value)
    } else {
      bookSearch("")
    }
  }
  return (
    <GlobalSearchFieldset data-testid="global-search">
      <label htmlFor="searchField">
        Vous pouvez également faire une recherche par titre:
        <input
          type="search"
          placeholder="Commencez par taper le titre du livre..."
          id="searchField"
          name="search"
          onChange={(event) => searchEvent(event)}
        />
      </label>
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
