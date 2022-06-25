import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { BooksContext } from "../../Context/bookContext"
import CartIcon from "../Svg/CartIcon"
import BookIcon from "../Svg/BookIcon"
import styledComponents from "../../StyledComponents/styledComponents"


const Header = () => {
  const { state } = useContext(BooksContext)
  const { cartItems } = state
  const { HiddenSpanSR, HeaderBlock } = styledComponents
  return (
    <HeaderBlock>
      <Link to="/">
        <BookIcon />
        <HiddenSpanSR>Page pricipale - Librairie Potier</HiddenSpanSR>
      </Link>
      <Link to="/cart"
      >
        <CartIcon />
        <HiddenSpanSR>Votre panier</HiddenSpanSR>
        {cartItems.length > 0 && (
          <span data-testid="cartItemsSpan">
            {cartItems.length} articles
          </span>
        )}
      </Link>
    </HeaderBlock>
  )
}

export default Header
