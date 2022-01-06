import React from 'react';
import Path347 from '../../images/Path 347.svg';
import Path346 from '../../images/Path 346.svg';
import Group338 from '../../images/Group 338.svg';
import Imglist from './Imglist.jsx';

function Proudectleft(props) {  
    const {Proudect} = props;

    return (
        <div className="col-md-12 col-lg-6 Proudectleft">

            <div className="Proudectleft__img">
            <img src={Group338} className="group338"/>
                <img src={Proudect.imagecover} className="imagecover"/>
            </div>

            <div className="carousel">
                <span className="next">
                    <img src={Path347}/>
                </span>
                <Imglist image={Proudect.image}/>
                <span className="back">
                    <img src={Path346}/>
                </span>
            </div>
        </div>)
}

export default Proudectleft;
