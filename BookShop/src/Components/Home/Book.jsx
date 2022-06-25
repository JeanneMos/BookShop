import React from "react"
import { PropTypes } from "prop-types"
import styledComponents from "../../StyledComponents/styledComponents"

const Book = ({ book, displayBook, addToCart }) => {
  const { cover, price, title } = book
  const { BookItem, BookImg, Button, Paragraph } = styledComponents
  return (
    <BookItem withMaxheigth>
      <Button onClick={() => displayBook(book)}>
        <BookImg lg src={cover} alt={title} height="260" width="160" />
        <Paragraph bold>{title}</Paragraph>
      </Button>
      <Paragraph>Prix: {price} €</Paragraph>

      <Button type="button" underlined onClick={() => addToCart(book)}>
        Ajouter au panier
      </Button>
    </BookItem>
  )
}

Book.propTypes = {
  book: PropTypes.shape({
    cover: PropTypes.string,
    price: PropTypes.number,
    title: PropTypes.string,
  }).isRequired,
  displayBook: PropTypes.func,
  addToCart: PropTypes.func,
}
Book.defaultProps = {
  displayBook: null,
  addToCart: null,
}
export default Book
