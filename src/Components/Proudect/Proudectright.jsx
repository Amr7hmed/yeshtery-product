import React from 'react';
import Stars from './Stars.jsx';

function Proudectright(props) {
    const {Proudect,addCart} = props;

    return (
        <div className="col-md-12 col-lg-6 Proudectright">
            <div className="card-body">

                <>
                    <img className="Proudectright_brand" src={Proudect.Brand}/>
                    <p className="card-text carditem Proudectright__description">
                            {Proudect.description}
                    </p>
                    <p className="Proudectright__producttype">{Proudect.Producttype}</p>
                </>

                <Stars review={Proudect.review}
                        reviewdtals={Proudect.reviewdtals} 
                        reviewpepole={Proudect.reviewpepole}/>

                <div className="card-title carditem Proudectright__price">
                    <span className="price">{Proudect.price}</span>
                    <span className="priceover">
                            9,999 LE  <span>30% Off</span>
                    </span>
                </div>

                <div className="carditem Proudectright__size">
                        <h4>Size</h4>
                        {Proudect.size.map((item,index)=>    
                            <button type="button" 
                            className="btn btn-secondary btn-sm sizebutton" key={index}>
                                {item}
                            </button>)
                        }
                </div>

                <div className="carditem Proudectright__color">
                    <h4>Color</h4>
                        {Proudect.color.map((item,index)=>
                        <span key={index} className="coloritem">
                            <img src={item}/>
                        </span>
                        )}
                </div>

                <div className="carditem Proudectright__quantity">
                    <h4>Quantity</h4>
                    <div className="countdiv">
                        <div className="countleft">-</div>
                        {Proudect.count}
                        <div className="countright">+</div>
                    </div>
                </div>

                <div className="d-flex justify-content-between carditem Proudectright__addcart">
                    <button type="button" className="btn btncart"
                    onClick={()=>addCart(Proudect.id)}>ADD TO CART</button>
                    <button type="button" className="btn btnpickup">Pickup From Store</button>
                </div>
                
            </div>
        </div>
    )
}

export default Proudectright;
