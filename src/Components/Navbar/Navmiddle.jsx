import React, { Component } from 'react';
import Path774 from '../../images/Path 774.svg';
import Group745 from '../../images/Group 745.svg';
import Path772 from '../../images/Path 772.svg';
import Path771 from '../../images/Path 771.svg';
import Path773 from '../../images/Path 773.svg';




export class Navmiddle extends Component {
    render() {
        const {cart,cartToggole} = this.props;

        return (
        <div className="navmiddle">
            <div className="container">
                <div className="d-flex justify-content-between navbarmiddle">
                    <div className="nmiddleitem navbarmiddle__search flex-fill bd-highlight">
                            <input type="text" className="form-control"
                            id="formGroupExampleInput"/>

                            <span className="spansearch">
                                <img src={Path774}/>
                                Search
                            </span>
                    </div>

                    <div className="nmiddleitem flex-fill bd-highlight navbarmiddle__logo">
                        <div className="addiesnav">
                            <img src={Group745}/>
                        </div>
                        
                    </div>
                    <div className="nmiddleitem navbarmiddle__right flex-fill bd-highlight
                         d-flex justify-content-around">

                            <span className="position-relative carticon"
                             onClick={()=>cartToggole()}>
                                    <img className="group756" src={Path772}/> 
                                    <span className="position-absolute carticon__nevgation 
                                    translate-middle badge rounded-pill">
                                    {cart.length}
                                        <span className="visually-hidden"></span>
                                    </span>
                                    <span className="navbarmiddle__right__text">Cart</span>
                            </span>

                                
                        <span>
                            <img className="group758" src={Path771}/>
                                <span className="navbarmiddle__right__text">Wishlist</span>
                            </span>
                        <span>
                            <img className="group753" src={Path773}/>
                                <span className="navbarmiddle__right__text">Login</span>
                        </span>
                    </div> 
                </div>
            </div>
    </div>)}
}

export default Navmiddle;
