import React from 'react';
import { Link } from 'react-router-dom';

const SigninLinks = () => {
	return (
	  <div className="menuright_item_loggin">
		  <Link to="/orders" className="item">
		    My Orders
		  </Link>
		  <Link to="/profile" className="item">
		    Profile
		  </Link>		  
	  </div>
	);
}

export default SigninLinks;