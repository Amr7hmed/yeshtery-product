import React, { Component } from 'react';
import Closeimg from '../../images/Group 1440.svg';
import Cartelment from './Cartelment';

export class Cart extends Component {
    render() {
        const {cart,cartToggole,idcart,removeProudect} = this.props;
        return (
            <div className="cart" id={idcart}>
                <div className="cart__content">
                    <div className="cart__decrpton">
                        <div className="cart__close">
                            <img src={Closeimg}  onClick={()=>cartToggole()}/>
                        </div>
                        <h3>My Cart</h3>
                        {cart.length ===0?
                            (<p className="cart__summary">Cart Empty</p>)
                            :(<>
                            <p className="cart__summary">Cart Summary</p>
                                {cart.map((itemcart,index)=>
                                    <Cartelment
                                    itemcart={itemcart} 
                                    key={index} 
                                    removeProudect={removeProudect}/>
                                )}
                                <div className="cart__totle">
                                    <h3>Total: 19,999 LE</h3>
                                </div>
                                <div className="cart__checkout">
                                    <span>Review Cart</span>
                                    <span>Complete Checkout</span>
                                </div>
                            </>)}

                    </div>
                </div>
            </div>
        )
    }
}

export default Cart;