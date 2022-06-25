import React from "react"
import { PropTypes } from "prop-types"
import styledComponents from "../../StyledComponents/styledComponents"

const CartItem = ({ item, removeItem, canDelete }) => {
  const { Button, CartItemArticle, BookImg, Paragraph } = styledComponents
  return (
    <li>
      <CartItemArticle>
        <BookImg src={item.cover} alt={item.title} />
        <Paragraph>{item.title}</Paragraph>
        <Paragraph>Prix: {item.price}€</Paragraph>
        {canDelete && (
          <Button
            underlined
            type="button"
            onClick={() => removeItem(item)}
            aria-label={`Supprimer l'article ${item.title} du panier`}
          >
            Supprimer l&apos;article
          </Button>
        )}
      </CartItemArticle>
    </li>
  )
}

CartItem.propTypes = {
  item: PropTypes.shape({
    cover: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
  removeItem: PropTypes.func,
  canDelete: PropTypes.bool,
}

CartItem.defaultProps = {
  removeItem: null,
  canDelete: false,
}
export default CartItem
