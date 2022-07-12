import {getSlices} from "./withOffersPrice";

describe("should calculate new price", () => {
  test("should diviser par 2 la valeur", () => {
    const price = 20;
    const offer = {
      sliceValue: 2
    };
   expect(getSlices(price, offer)).toBe(10);
  })
});