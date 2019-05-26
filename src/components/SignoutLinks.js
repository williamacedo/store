import React from 'react';
import { Link } from 'react-router-dom';

const SignoutLinks = () => {
	return (
	  <div className="menuright_item">
		  <Link to="/login" className="item">
		    Login
		  </Link>
		  <Link to="/register" className="item">
		    Register
		  </Link>
	  </div>
	);
}

export default SignoutLinks;