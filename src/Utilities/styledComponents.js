import styled from "@emotion/styled"

const styledComponents = {
  Main: styled("main")`
    margin-top: 2rem;
  `,

  Wrapper: styled("div")`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 5px;
    position: relative;
    @media (min-width: 420px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 780px) {
      grid-template-columns: repeat(3, 1fr);
    }
  `,
  NoResultsWrapper: styled("div")`
    padding: 5rem 0;
  `,
  LoaderWrapper: styled("div")`
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  Title: styled("h1")`
    font-size: 1.5rem;
    text-align: center;
  `,
  BookItem: styled("article")`
    color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.8rem;
    ${(props) => props.withMaxheigth && "max-height: 350px"};
    label: book-item;
    text-decoration: none;
    margin-top: ${(props) => (props.marginTop ? `${props.marginTop}rem` : "0")};
  `,
  Paragraph: styled("p")`
    margin: 0.3rem 0;
    font-weight: ${(props) => (props.bold ? "bold" : "normal")};
  `,
  DescriptionParagraph: styled("p")`
    padding: 1rem 2rem;
    font-size: 0.8rem;
    line-height: 1.5;
  `,
  BookImg: styled("img")`
    width: 90%;
    max-width: ${(props) => (props.lg ? "10rem" : "4rem")};
  `,
  HiddenSpanSR: styled("span")`
    border: 0 !important;
    clip: rect(1px, 1px, 1px, 1px) !important;
    clip-path: inset(50%) !important;
    height: 1px !important;
    overflow: hidden !important;
    padding: 0 !important;
    position: absolute !important;
    width: 1px !important;
    white-space: nowrap !important;
  `,
  Button: styled("button")`
    border: ${(props) => (props.border ? `1px solid ${props.border}` : "none")};
    background-color: ${(props) =>
      props.bgColor ? props.bgColor : "transparent"};
    -webkit-appearance: none;
    position: relative;
    margin: auto;
    cursor: pointer;
    display: block;
    color: ${(props) => (props.border ? props.border : "#5a5a5a")};
    text-decoration: ${(props) => (props.underlined ? "underline" : "none")};
    ${(props) => props.padding && `padding: ${props.padding}`};
    &:hover,
    &:focus {
      color: black;
    }
  `,
  StyledLink: styled("a")`
    color: #5a5a5a;
    display: inline-block;
    ${(props) => props.centered && "text: center"}
    &:hover, &:focus {
      color: black;
    }
  `,
  CartItemArticle: styled("article")`
    display: grid;
    grid-template-columns: 1fr 2fr 1fr 1fr;
    grid-gap: 5px;
    align-items: center;
    padding: 0.5rem 0;
    border-bottom: 1px solid #dedede;
    @media (max-width: 420px) {
      grid-template-columns: unset;
      grid-gap: 10px;
    }
  `,
  GlobalSearchFieldset: styled("div")`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
    label: global-search;
    @media (max-width: 420px) {
      flex-direction: column;
    }
    & label {
      font-size: 0.9rem;
      padding: 0.3rem;
    }
    & input {
      -webkit-appearance: none;
      padding: 0.5rem;
      border: 1px solid #333333;
      max-width: 100%;
      min-width: 19rem;
    }
  `,

  SliderOverlay: styled("div")`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.62);
    width: 100vw;
    height: 100vh;
    transform: ${(props) =>
      props.shown ? "translateX(0)" : "translateX(100%)"};
  `,
  Slider: styled("div")`
    position: fixed;
    top: 0;
    right: 0;
    width: 90%;
    max-width: 30rem;
    height: 100vh;
    overflow-y: scroll;
    background-color: white;
    z-index: 200;
    box-shadow: 1px 0px 7px rgba(0, 0, 0, 0.5);
    transition: transform 0.4s ease-out;
    transform: ${(props) =>
      props.open ? "translateX(0)" : "translateX(100%)"};
  `,
  BtnClose: styled("button")`
    position: absolute;
    right: 1.2rem;
    top: 1.2rem;
    border: none;
    background-color: transparent;
    &:after {
      content: " \\2573";
      font-size: 1rem;
    }
  `,
}
export default styledComponents
