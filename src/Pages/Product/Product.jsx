import React, { Component } from 'react';
import Proudectleft from '../../Components/Proudect/Proudectleft';
import Proudectright from '../../Components/Proudect/Proudectright';
import Productsimilar from '../../Components/Proudect/Productsimilar';

export class Proudect extends Component {
     render() {
        const {Proudects,addCart} = this.props;
        return (<>

        <div className="container">
            <div className="listlink">
                <a href="#">Men</a> / 
                <a href="#">Clothing</a> / 
                <a href="#">Tops</a> / 
                <a href="#">Adidas</a> / 
                 Adidas T-Shirt
            </div>
        </div>
        <hr/>

        
        <div className="container">
            <div className="row proudect">
                <Proudectleft Proudect={Proudects[0]}/>
                <Proudectright Proudect={Proudects[0]} addCart={addCart}/>
            </div>
        </div>
        
        <div className="container">
            <Productsimilar Proudects={Proudects}/>
        </div>

        
        <div className="container">
            <div className="lineend">
                <div className="lineend__first"></div>
                <div className="lineend__thcnd"></div>
            </div>
        </div>

        </>)}
}

export default Proudect;
