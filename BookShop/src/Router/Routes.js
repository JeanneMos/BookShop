import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import BooksContainer from "../Pages/BooksContainer"
import Cart from "../Pages/Cart"
import ConfirmationPage from "../Pages/ConfirmationPage"

const Routes = () => {
  return (
    <Router>
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
