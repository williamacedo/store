import React, { Component, lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';
import Welcome from './pages/Welcome';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import CategoryList from './pages/CategoryList';
import Cart from './pages/Cart';
import Product from './pages/Product';
import Login from './pages/Login';
import Register from './pages/Register';
import Orders from './pages/Orders';
import Profile from './pages/Profile';
import LoginAdmin from './pages/admin/Login';
import HomeAdmin from './pages/admin/Home';
import ProductAdmin from './pages/admin/Product';
import CategoriesAdmin from './pages/admin/Categories';

class App extends Component {
  render() {
    return (
    	<BrowserRouter basename={process.env.PUBLIC_URL}>
    		<div>
    			<Switch>
                    <Route path="/" exact component={Welcome} />
    				<Route path="/home" component={Home} />
    				<Route path="/catalog" component={Catalog} /> 
                    <Route path="/category/:id" component={CategoryList} />
                    <Route path="/product/:id" component={Product} />
                    <Route path="/cart" component={Cart} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/orders" component={Orders} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/admin" exact component={LoginAdmin} />
                    <Route path="/admin/home" component={HomeAdmin} />
                    <Route path="/admin/categories" component={CategoriesAdmin} />
                    <Route path="/admin/products" component={ProductAdmin} />                           
    			</Switch>              
    		</div>
    	</BrowserRouter>
    );
  }
}

export default App;
