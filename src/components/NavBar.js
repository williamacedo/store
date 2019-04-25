import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const NavBar = ({ counter }) => {
	return (
		<div className="ui secondary menu red">
		  <NavLink to="/home" className="item">
		    Home
		  </NavLink>
		  <NavLink to="/catalog" className="item">
		    Catalog
		  </NavLink>
		  <div className="right menu">
			    <div className="item">
			      <div className="ui icon input">
			        <input type="text" placeholder="Search all products..." />
			        <i className="search link icon"></i>
			      </div>
			    </div>
			    <div className="item">			    
				    <Link className="ui red button">
				      <i class="cart icon"></i>
				      ({counter}) Cart
				    </Link>			    
			    </div>
		    </div>		  
		</div>
	);
}

export default NavBar;