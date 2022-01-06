import React, { Component } from 'react';

export class Navbottom extends Component {
    render() {
        return (
            <div className="navbottom">
                <div className="container">
                        <div className="d-flex bd-highlight navbottom__list">
                            <div className="p-2 flex-fill bd-highlight">
                                Men
                            </div>
                            <div className="p-2 flex-fill bd-highlight">
                                Women
                            </div>
                            <div className="p-2 flex-fill bd-highlight">
                                Unisex
                            </div>
                            <div className="p-2 flex-fill bd-highlight">
                                Kids
                            </div>
                            <div className="p-2 flex-fill bd-highlight">
                                Best Sellers
                            </div>
                            <div className="p-2 flex-fill bd-highlight">
                                New Arrivals
                            </div>
                            <div className="p-2 flex-fill bd-highlight">
                                Offers
                            </div>
                        </div>
                </div>
            </div>
        )
    }
}

export default Navbottom;
