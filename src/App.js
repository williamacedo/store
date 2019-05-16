import React, { Component, lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';

import './App.css';
const Welcome = lazy(() => import('./pages/Welcome'));
const Home = lazy(() => import('./pages/Home'));
const Catalog = lazy(() => import('./pages/Catalog'));
const CategoryList = lazy(() => import('./pages/CategoryList'));
const Cart = lazy(() => import('./pages/Cart'));

class App extends Component {
  render() {
    return (
    	<BrowserRouter>
    		<div>
                <div className="ui block header">
    			 <Header />
                </div>
                <div className="ui container">
        			<Suspense fallback={<div className="ui loading segment"></div>}>
    	    			<Switch>
                            <Route path="/" exact component={Welcome} />
    	    				<Route path="/home" component={Home} />
    	    				<Route path="/catalog" component={Catalog} /> 
                            <Route path="/category/:id" component={CategoryList} />
                            <Route path="/cart" component={Cart} />                           
    	    			</Switch>
        			</Suspense>
                </div>
    		</div>
    	</BrowserRouter>
    );
  }
}

export default App;
