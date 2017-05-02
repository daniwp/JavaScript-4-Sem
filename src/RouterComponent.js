import React from 'react'
import {Router, Route, IndexRoute, hashHistory} from 'react-router'
import Product from './Product'
import Details from './Details'
import App from './App'
import Blog from './Blog'
import Company from './Company'
import Home from './Home'

//Router start
export default class RouterComponent extends React.Component {

  render() {
    var books = this.props.bookStore.books;
    return (
      <div>
        <Router history={hashHistory}>
          <Route path="/" component={App}>
            <IndexRoute component={Home}></IndexRoute>
            <Route path="products" component={Product}
                   books={books}/>
            <Route path="products/details/:id" component={Details}
                   books={books}/>
            <Route path="company" component={Company}/>
            <Route path="blog" component={Blog}/>
          </Route>
        </Router>
      </div>
    );
  }
}
//Router end