import React from 'react';
import { NavLink } from 'react-router-dom';

const AdminLayout = props => {
	return (
		<div>
			<div className="ui grid">
				<div className="four wide column">
					<div className="ui left fixed vertical menu">
					  <div className="item">
					    <img className="ui mini image" src="https://semantic-ui.com/images/logo.png" />
					  </div>
					  <NavLink className="item" to="/admin/home">
					  	<i class="grid home icon"></i>
					  	Dashboard
					  	</NavLink>
					  <NavLink className="item" to="/admin/categories">
					  <i class="grid shopping basket icon"></i>
					 	Categories
					  </NavLink>
					  <NavLink className="item" to="/admin/products">
					  <i class="grid shopping cart icon"></i>
					  	Products
					  </NavLink>
					</div>
				</div>
				<div className="eleven wide column">
					<div className="ui container" style={{margin: '20px'}}>
						{props.children}
					</div>	
				</div>	
			</div>
		</div>
	);
}

export default AdminLayout;