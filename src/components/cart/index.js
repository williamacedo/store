import React from 'react';
import CartItem from '../CartItem';
import { Link } from 'react-router-dom';
import Grid from '../layouts/Grid';
import Column from '../layouts/Column';
import Segment from '../segment/Segment';
import ButtonIcon from '../buttons/ButtonIcon';

const CartPage = ({ items, counter, clearCart, checkout, goCheckout }) => {
	return (
		<div className={items.length === 0 ? "ui segment center aligned" : "ui segment"}>
			{counter > 0 &&
					<Grid style={{marginBottom: 10}}>
						<Column col="sixteen wide column">
							<ButtonIcon 
								type="right floated yellow"
								icon="trash"
								text="Clear"
								click={clearCart}
							/>
						</Column>		
					</Grid>
			}
			<div>
			{items.length !== 0 &&
			<Segment type="padded">
				{items && items.map(item => {
					return <CartItem key={item.key} product={item} />;
				})}					
			</Segment>
			}
			</div>
			<div>
				{items.length === 0 &&
					<div>
						<p>Empty cart</p>
						<div className="item">
							<Link to="/catalog" className="ui button">
								<i className="arrow left icon"></i>
								Go to Shop
							</Link>
						</div>
					</div>
				}
			</div>
			{counter > 0 &&
					<Grid style={{marginTop: 10, marginBottom: 5}}>
						<Column col="sixteen wide column">
								<ButtonIcon 
									type="right floated green"
									icon="credit card outline"
									text="Checkout"
									click={goCheckout}
								/>							    		    
						</Column>		
					</Grid>
			}	
			<div>
			</div>			
		</div>
	);
}

export default CartPage;