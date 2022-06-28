import React, { useContext, useEffect, useCallback, useState } from "react"
import axios from "axios"
import { BooksContext } from "../Context/bookContext"
import { getOfferUrl } from "../Utilities/constants"
import WithOffersPrice from "../Utilities/withOffersPrice"
import Layout from "../Layout/Layout"
import CartItem from "../Components/Cart/CartItem"
import styledComponents from "../StyledComponents/styledComponents"
import { removeFromCart } from "../Context/bookActions"

const initState = { discountPrice: 0, offerType: null }
const Cart = () => {
  const { state, dispatch } = useContext(BooksContext)
  const { Button, Title, StyledLink, Paragraph, ErrorParagraph } = styledComponents
  const { cartItems } = state
  const [{ discountPrice, offerType }, setDiscountPrice] = useState(initState)
  const [networkError, setNetworkError] = useState(null)
  const [products, setProducts] = useState([])
  const[price, setPrice] = useState(null)

  const calculateSale = useCallback(async () => {
    const url = getOfferUrl.replace("$products", products)
    try {
      const result = await axios.get(url);
      const offers  = result.data.offers;
      const offersWithPrice = WithOffersPrice(offers, price);
      setDiscountPrice({ discountPrice: offersWithPrice.calculatedPrice, offerType: offersWithPrice.calculatedType })
    }
    catch(err) {
      console.error(err);
      setNetworkError("Nous avons rencontré une erreur. Merci de réessayer plus tard.");
    }

  }, [price, products])

  const removeItemFromCart = (item) => {
    dispatch(removeFromCart(item))
  }

  useEffect(() => {
    document.title = "Panier"
    if (cartItems.length > 0) {
      setProducts(cartItems.map((item) => item.isbn).join())
      const priceArray = cartItems.map((item) => item.price)
      setPrice(priceArray.reduce((acc, next) => (acc += next)))
    }
    products.length > 0 && discountPrice !== 0 && calculateSale()
  }, [products, calculateSale, discountPrice, cartItems])

  return (
    <Layout>
      <main>
        <Title>Votre panier</Title>
        <Paragraph>
          Vous avez {cartItems.length} articles dans votre panier.
        </Paragraph>
        {cartItems.length > 0 && (
          <>
            <ul>
              {cartItems.map((item) => (
                <CartItem
                  key={item.isbn}
                  item={item}
                  canDelete
                  removeItem={removeItemFromCart}
                />
              ))}
            </ul>
            {discountPrice === 0 ? (
              <div>
                {networkError && <ErrorParagraph>{networkError}</ErrorParagraph>}
                <Paragraph>
                  Le sous-total sans réduction de votre panier est{" "}
                  <span data-testid="initialPrice">{price}€</span>
                </Paragraph>
                <Paragraph>Nous avons une réduction pour ces livres!</Paragraph>
                <Paragraph>Pour découvrir et en profiter, cliquez ici:</Paragraph>
                <Button
                  border="#5a5a5a"
                  type="button"
                  onClick={calculateSale}
                >
                  Appliquer la réduction
                </Button>
              </div>
            ) : (
              <div role="status" data-testid="newPrice">
                <Paragraph>Félicitations!</Paragraph>
                <Paragraph>
                  Le type d&apos;offre la plus avantagieuse est du type{" "}
                  <strong>{offerType}</strong>
                </Paragraph>
                <Paragraph>
                  Votre nouveau prix est {discountPrice} € au lieu de {price} €.
                </Paragraph>
                <StyledLink centered href="/confirmation-page">
                  Passer au paiement
                </StyledLink>
              </div>
            )}
          </>
        )}
      </main>
    </Layout>
  )
}
export default Cart
