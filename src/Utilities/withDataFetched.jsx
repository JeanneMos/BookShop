/* eslint-disable no-unused-vars */
/* eslint-disable no-return-assign */
/* eslint-disable react/jsx-props-no-spreading */
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
      let isMounted = true
      dispatch(loadingData())
      async function fetchData() {
        await axios
          .get(getBooksUrl)
          .then((res) => {
            dispatch(loadedData())
            setBooks(res.data)
          })
          .catch((error) => {
            dispatch(displayError(error))
            isMounted = false
          })
      }
      fetchData()
      return () => (isMounted = false)
    }, [dispatch])
    return <Component {...props} books={books} />
  }
  return WithDataComponent
}
export default withDataFetched
