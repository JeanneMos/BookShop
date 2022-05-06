/* eslint-disable no-unused-expressions */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import React, { useContext, useEffect, useCallback, useState } from "react"
import axios from "axios"
import { css } from "emotion"
import { BooksContext } from "../../Context/bookContext"
import { getOfferUrl } from "../../Utilities/constants"
import WithOffersPrice from "../../Utilities/withOffersPrice"
import CartItem from "./CartItem"
import styledComponents from "../../Utilities/styledComponents"
import { RemoveFromCart } from "../../Context/bookActions"

const initState = { newPrice: 0, offerType: null }
const Cart = () => {
  const { state, dispatch } = useContext(BooksContext)
  const { Button, Title, StyledLink, Paragraph } = styledComponents
  let products = []
  let price = null
  const { cartItems } = state
  const [{ newPrice, offerType }, setNewPrice] = useState(initState)

  if (cartItems.length > 0) {
    products = cartItems.map((item) => item.isbn).join()
    const priceArray = cartItems.map((item) => item.price)
    price = priceArray.reduce((acc, next) => (acc += next))
  }

  const calculateSale = useCallback(async () => {
    const url = getOfferUrl.replace("$products", products)
    await axios
      .get(url)
      .then((res) => res.data.offers)
      .then((offers) => WithOffersPrice(offers, price))
      .then(({ calculatedPrice, calculatedType }) => {
        setNewPrice({ newPrice: calculatedPrice, offerType: calculatedType })
      })
      // - TO define behaviour later
      .catch((err) => console.error(`oups, ${err}`))
  }, [price, products])

  const removeItemFromCart = (item) => {
    dispatch(RemoveFromCart(item))
  }

  useEffect(() => {
    document.title = "Panier"
    products.length > 0 && newPrice !== 0 && calculateSale()
  }, [products, calculateSale, newPrice])
  return (
    <main>
      <Title>Votre panier</Title>
      <Paragraph>
        Vous avez {cartItems.length} articles dans votre panier.
      </Paragraph>
      {cartItems.length > 0 && (
        <>
          <ul
            className={css`
              padding: 0;
            `}
          >
            {cartItems.map((item) => (
              <CartItem
                key={item.isbn}
                item={item}
                canDelete
                removeItem={removeItemFromCart}
              />
            ))}
          </ul>
          {newPrice === 0 ? (
            <div>
              <Paragraph>
                Le sous-total sans réduction de votre panier est{" "}
                <span data-testid="initialPrice">{price}€</span>
              </Paragraph>
              <Paragraph>Nous avons une réduction pour ces livres!</Paragraph>
              <Paragraph>Pour découvrir et en profiter, cliquez ici:</Paragraph>
              <Button
                border="#5a5a5a"
                padding=".8rem .5rem"
                type="button"
                onClick={calculateSale}
              >
                Appliquer la réduction
              </Button>
            </div>
          ) : (
            <div role="status" data-testid="newPrice">
              <Paragraph>Félicitation! </Paragraph>
              <Paragraph>
                Le type d&apos;offre la plus avantagieuse est du type{" "}
                <strong>{offerType}</strong>
              </Paragraph>
              <Paragraph>
                Votre nouveau prix est {newPrice} € au lieu de {price} €.
              </Paragraph>
              <StyledLink centered href="/confirmation-page">
                Passer au paiement
              </StyledLink>
            </div>
          )}
        </>
      )}
    </main>
  )
}
export default Cart
