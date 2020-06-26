import React, { useContext } from "react"
import { Link } from "react-router-dom"
import styled from "@emotion/styled"
import { css } from "emotion"
import { BooksContext } from "../../Context/bookContext"
import CartIcon from "../../Utilities/Svg/CartIcon"
import BookIcon from "../../Utilities/Svg/BookIcon"
import styledComponents from "../../Utilities/styledComponents"

const HeaderBlock = styled("header")`
  border-bottom: 1px solid #cccccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`

const Header = () => {
  const { state } = useContext(BooksContext)
  const { cartItems } = state
  const { HiddenSpanSR } = styledComponents
  return (
    <HeaderBlock>
      <Link to="/">
        <BookIcon />
        <HiddenSpanSR>Page pricipale - Librairie Potier</HiddenSpanSR>
      </Link>
      <Link
        className={css`
          text-decoration: none;
          display: flex;
          align-items: center;
          font-size: 0.8rem;
          &:hover {
            text-decoration: underline;
          }
        `}
        to="/cart"
      >
        <CartIcon />
        <HiddenSpanSR>Votre panier</HiddenSpanSR>
        {cartItems.length > 0 && (
          <span
            data-testid="cartItemsSpan"
            className={css`
              margin-left: 0.5rem;
            `}
          >
            {cartItems.length} articles
          </span>
        )}
      </Link>
    </HeaderBlock>
  )
}

export default Header
