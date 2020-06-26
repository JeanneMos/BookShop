import React from "react"
import styled from "@emotion/styled"
import { PropTypes } from "prop-types"
import withDataFetched from "../../Utilities/withDataFetched"
import BooksList from "./BooksList"
import styledComponents from "../../Utilities/styledComponents"

const Main = styled("main")`
  margin-top: 2rem;
`

const BooksContainer = ({ books }) => {
  const { Title } = styledComponents
  return (
    <Main>
      <Title>Bienvenue dans la librairie</Title>
      <BooksList books={books} />
    </Main>
  )
}

BooksContainer.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      cover: PropTypes.string,
      title: PropTypes.string,
      price: PropTypes.number,
      isbn: PropTypes.string,
    })
  ),
}
BooksContainer.defaultProps = {
  books: [],
}
export default withDataFetched(BooksContainer)
