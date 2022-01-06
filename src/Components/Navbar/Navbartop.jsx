import React, { Component } from 'react';
import Group770 from '../../images/Group 770.svg';
import Group769 from '../../images/Group 769.svg';
import Path797 from '../../images/Path 797.svg';
import Path796 from '../../images/Path 796.svg';
import Group756 from '../../images/Group 756.svg';
import Group758 from '../../images/Group 758.svg';
import Group753 from '../../images/Group 753.svg';

export default class Navbartop extends Component {
    render() {
        return (
            <div className="navtop">
                <div className="container">
                    <div className="d-flex justify-content-between">

                            <div className="p-2  bd-highlight navtop__logo">
                                <img className="group770" src={Group770}/>
                                <img className="group769" src={Group769}/>
                            </div>

                            <div className="p-2  bd-highlight navtop__middle">
                                    <img className="path797" src={Path797}/>
                                    <span className="navtop__middle__text">
                                    Valentine’s Day Offers! Buy Two Get One Free <a href="#">Shop Now</a>
                                    </span>
                                    <img className="path796" src={Path796}/>  
                            </div>

                            <div className="p-2 bd-highlight navtop__end">
                                <span>
                                    <img className="group756" src={Group756}/>
                                        <span className="navtop__end__text"> 
                                        Contact Us
                                        </span>
                                </span>
                                <span>
                                    <img className="group758" src={Group758}/>
                                        <span className="navtop__end__text"> 
                                        Track Order
                                        </span>
                                </span>
                                <span>
                                    <img className="group753" src={Group753}/>
                                        <span className="navtop__end__text"> 
                                        Find A Store
                                        </span>
                                </span>
                            </div>

                    </div>
                </div>
            </div>
        )}}
