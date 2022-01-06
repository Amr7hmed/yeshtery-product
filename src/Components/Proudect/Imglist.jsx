import React from 'react';
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 

function Imglist(props) {
    const {image}=props;
    const options = {
        margin: 5,
        responsiveClass: true,
        loop: true,
        nav: true,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 3,
            },
            400: {
                items: 3,
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
        <OwlCarousel className="owl-theme 
            d-flex justify-content-between carousel__imglist"
            {...options}>
                {image.map((img,index)=>
                <img src={img} key={index}/>)}
        </OwlCarousel> 
)}

export default Imglist;
