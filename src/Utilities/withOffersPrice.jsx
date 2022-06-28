let calculatedPrices = []
const getSlices = (price, offer) => {
  return +price / +offer.sliceValue
}
const calculatePrice = (offer, price) => {
  const { type, value } = offer
  let newPrice = 0
  
  switch (type) {
    case "minus":
      newPrice = +price - +value
      calculatedPrices = [
        ...calculatedPrices,
        { calculatedPrice: newPrice, calculatedType: type },
      ]
      break
    case "percentage":
      newPrice = +price - (+price * +value) / 100
      calculatedPrices = [
        ...calculatedPrices,
        { calculatedPrice: newPrice, calculatedType: type },
      ]
      break
    case "slice":
      newPrice = price - Math.floor(getSlices(price, offer)) * value
      calculatedPrices = [
        ...calculatedPrices,
        { calculatedPrice: newPrice, calculatedType: type },
      ]
      break
    default:
      return price
  }
  return calculatedPrices
}
const bestOffer = () => {
  const minPrice = calculatedPrices.reduce((prev, next) =>
    prev.calculatedPrice < next.calculatedPrice ? prev : next
  )
  return minPrice
}
const WithOffersPrice = (offers, price) => {
  calculatedPrices = []
  offers.forEach((offer) => {
    calculatePrice(offer, price)
  })
  return bestOffer(calculatedPrices)
}
export default WithOffersPrice
