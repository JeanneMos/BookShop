import React, {useState, useEffect, useContext} from "react"
import { PropTypes } from "prop-types"
import DotLoader from "react-spinners/DotLoader"
import axios from "axios"
import { getBooksUrl } from "../Utilities/constants"
import { BooksContext } from "../Context/bookContext"
import { displayError } from "../Context/bookActions"
import Layout from "../Layout/Layout"
import BooksList from "../Components/Home/BooksList"
import styledComponents from "../StyledComponents/styledComponents"
import Search from "../Components/Search/Search"


const BooksContainer = () => {
  const { Title, Main, LoaderWrapper } = styledComponents
  const {dispatch} = useContext(BooksContext)
  const [books, setBooks] = useState([])
  const [searchValue, setSearchValue] = useState("")
  const [booksToSend, setBooksToSend] = useState(books)
  const [loader, setLoader] = useState(false)

  const handleBookSearch = (val) => {
    setSearchValue(val)
    if (books && val.trim() !== "") {
      setBooksToSend(
        books.filter((book) =>
          book.title.toLowerCase().includes(val.toLowerCase())
        )
      )
    } else if (books) {
      setBooksToSend(books)
    } else {
      setBooksToSend([])
    }
  }

  useEffect(() => {
    async function getBooks() {
        setLoader(true)
        try {
          const result = await axios.get(getBooksUrl)
          const books = await result.data
          setBooks(books)
        } catch(err) {
          dispatch(displayError({error:err}))
          setBooks([])
        }
        setLoader(false)
  }
    getBooks();
  }, [dispatch]);

  return (
    <Layout>
      <Main>
        <Title>Bienvenue dans la librairie</Title>
        <Search bookSearch={handleBookSearch} />
        {loader && (
          <LoaderWrapper>
            <DotLoader size={200} color="#feaf46" />
          </LoaderWrapper>
        )}
        {books && <BooksList books={searchValue ? booksToSend : books} />}
      </Main>
    </Layout>
  )
}

BooksContainer.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      cover: PropTypes.string,
      title: PropTypes.string,
      price: PropTypes.number,
      isbn: PropTypes.string,
    })
  ),
}
BooksContainer.defaultProps = {
  books: [],
}

export default BooksContainer;