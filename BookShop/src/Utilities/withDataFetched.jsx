import React, { useState, useEffect, useContext } from "react"
import axios from "axios"
import { getBooksUrl } from "./constants"
import { BooksContext } from "../Context/bookContext"
import { displayError, loadingData, loadedData } from "../Context/bookActions"

const withDataFetched = (Component) => {
  const WithDataComponent = (props) => {
    const { dispatch } = useContext(BooksContext)
    const [books, setBooks] = useState(null)
    useEffect(() => {
      dispatch(loadingData())
      function fetchData() {
        axios
          .get(getBooksUrl)
          .then((res) => {
            dispatch(loadedData())
            setBooks(res.data)
          })
          .catch((error) => {
            dispatch(displayError(error))
          })
      }
      fetchData()
    }, [dispatch])
    return <Component props={props} books={books} />
  }
  return WithDataComponent
}
export default withDataFetched
