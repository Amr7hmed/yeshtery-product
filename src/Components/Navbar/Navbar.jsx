import React, { Component } from 'react';
import Navbottom from './Navbottom';
import Navmiddle from './Navmiddle';
import  Navbartop  from './Navbartop';

export class Navbar extends Component {
    render() {
        const {cart,cartToggole} = this.props;
        return (
            <div>
                <Navbartop/>
                <Navmiddle cart={cart} cartToggole={cartToggole}/>
                <Navbottom/>
            </div>
        )
    }
}

export default Navbar;
