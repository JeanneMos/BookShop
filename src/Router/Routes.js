import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import BooksContainer from "../Components/Home/BooksContainer"
import Cart from "../Components/Cart/Cart"
import ConfirmationPage from "../Components/Cart/ConfirmationPage"
import Header from "../Components/Header/Header"

const Routes = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <BooksContainer />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/confirmation-page">
          <ConfirmationPage />
        </Route>
      </Switch>
    </Router>
  )
}
export default Routes
