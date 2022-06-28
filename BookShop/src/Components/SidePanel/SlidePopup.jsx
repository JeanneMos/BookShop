import React, { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import FocusLock from "react-focus-lock"
import { PropTypes } from "prop-types"
import styledComponents from "../../StyledComponents/styledComponents"
import CartItem from "../Cart/CartItem"
import {hideSlider} from "../../Context/bookActions"
import { useContext } from "react"
import { BooksContext } from "../../Context/bookContext"

const SlidePopup = (props) => {
  const {
    BookItem,
    BookImg,
    Button,
    Paragraph,
    DescriptionParagraph,
    HiddenSpanSR,
    SliderOverlay,
    Slider,
    BtnClose,
  } = styledComponents
  const { book, cartItems, alertMessage, addToCart, closeSlider, open } = props
  const { cover, title, price, synopsis } = book || {}
  const modalRef = useRef(null)
  const {dispatch} = useContext(BooksContext)

  // focus management with ref of 'emotion'
  let btnClose = null
  const closeSidePanel = () => {
    dispatch(hideSlider())
    setTimeout(() => {
      closeSlider()
    }, 400)
  }

  useEffect(() => {
    btnClose.focus()
    return () => {
      dispatch(hideSlider())
    }
  }, [dispatch, btnClose])
  return (
    <FocusLock>
      <SliderOverlay shown={open} onClick={closeSidePanel} />
      <Slider
        ref={modalRef}
        open={open}
        aria-modal="true"
        role="dialog"
        aria-labelledby="dialogParagraphTitle"
        aria-describedby="dialogDescription"
        id="modalDialog"
        data-testid="modalDialog"
      >
        <BtnClose
          aria-label="Close dialog"
          onClick={closeSidePanel}
          ref={(button) => {
            btnClose = button
          }}
        />
        <BookItem role="document">
          {book ? (
            <>
              <BookImg lg role="presentation" src={cover} alt="" />
              <Paragraph
                role="heading"
                aria-level="1"
                bold
                id="dialogParagraphTitle"
              >
                {title}
              </Paragraph>
              <Paragraph>{price} €</Paragraph>
              <HiddenSpanSR id="dialogDescription">
                Description complète du livre {title}
              </HiddenSpanSR>
              <Button underlined type="button" onClick={() => addToCart(book)}>
                Ajouter au panier
              </Button>
              {synopsis &&
                synopsis.map((syn) => (
                  <DescriptionParagraph key={syn}>{syn}</DescriptionParagraph>
                ))}
            </>
          ) : (
            <>
              <Paragraph
                role="heading"
                aria-level="1"
                bold
                id="dialogParagraphTitle"
              >
                Votre panier:
              </Paragraph>
              {alertMessage && <Paragraph bold>{alertMessage}</Paragraph>}
              <Paragraph id="dialogDescription">
                Vous avez {cartItems.length} articles dans votre panier.
              </Paragraph>
              {cartItems && (
                <ul>
                  {cartItems.map((item) => (
                    <CartItem item={item} key={item.isbn} canDelete={false} />
                  ))}
                </ul>
              )}
              <Paragraph>
                Voulez-vous voir quelles réductions vous pouvez obtenir?
              </Paragraph>
              <Link to="/cart">Voir mon panier</Link>
            </>
          )}
        </BookItem>
      </Slider>
    </FocusLock>
  )
}

SlidePopup.propTypes = {
  open: PropTypes.bool.isRequired,
  book: PropTypes.shape({
    cover: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    isbn: PropTypes.string,
    synopsis: PropTypes.arrayOf(PropTypes.string),
  }),
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      cover: PropTypes.string,
      title: PropTypes.string,
      price: PropTypes.number,
      isbn: PropTypes.string,
    })
  ),
  alertMessage: PropTypes.string,
  addToCart: PropTypes.func,
  closeSlider: PropTypes.func.isRequired,
}
SlidePopup.defaultProps = {
  book: {},
  cartItems: [],
  alertMessage: "",
  addToCart: null,
}

export default SlidePopup
