import React from 'react';
import Group577 from '../../images/Group 577.svg';
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 
import Stars from './Stars';

function Productsimilar(props) {
    const {Proudects}=props;
    const options = {
        margin: 5,
        responsiveClass: true,
        loop: true,
        nav: true,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 2,
            },
            400: {
                items: 2,
            },
            600: {
                items: 3,
            },
            700: {
                items: 4,
            },
            1000: {
                items: 4,
            }
        },
      };
    return (
        <div className="productsimilar">
            <div className="productsimilar__title">
                <h4>Similar Products</h4>
                <p>You may like these products also</p>
            </div>

            <div className="similarArray">
            <OwlCarousel className="owl-theme d-flex justify-content-between img-list"
            {...options}>
                {Proudects.map(item=>
                    <div key={item.id}>
                            <div className="similarArray__card">
                                <div className="similarArray__img">
                                    <img src={Group577} className="group577"/>
                                    <img src={item.imagecover} className="cover"/>
                                </div>
                                <div className="card-text carditem similarArray__description">
                                    {item.description}
                                </div>
                                <div className="card-text carditem similarArray__price">
                                    <div className="price">{item.price}</div>
                                    <div className="brand"><img src={item.Brand}/></div>
                                </div>

                                
                                <div className="card-text carditem similarArray__stars stars">
                                    <Stars review={item.review} reviewdtals={item.reviewdtals}/>
                                </div>

                                <div  className="card-text carditem similarArray__genena">
                                    <span>Pickup From : </span>
                                    <span>Genena Mall</span>
                                </div>
                            </div>
                    </div>)}
                    </OwlCarousel>
            </div>
        </div>
    )
}

export default Productsimilar;