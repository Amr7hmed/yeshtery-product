import React from 'react';

function Cartelment(props) {
    const {itemcart,removeProudect} = props;
    return (<>
        <div className="cartelment">
            <div className="row">

                    <div className="col-4 cartelment__img">
                        <img src={itemcart.imagecover}/>
                    </div>

                    <div className="col-8">
                        <p className="cartelment__decrpton">{itemcart.description}</p>
                        <p className="cartelment__quantity">Quantity: {itemcart.count}</p>
                        <div className="cartelment__price">
                            <span>{itemcart.price}</span>
                            <span onClick={()=>removeProudect(itemcart.id)}>Remove</span>
                        </div>
                    </div>
                    
            </div>
        </div>


    </>)
}

export default Cartelment;
