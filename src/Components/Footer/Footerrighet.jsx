import React from 'react';
import Group1431 from '../../images/Group 1431.svg';
import Group1432 from '../../images/Group 1432.svg';
import Group1435 from '../../images/Group 1435.svg';
import Group1433 from '../../images/Group 1433.svg';
import Group1434 from '../../images/Group 1434.svg';

function Footerrighet() {
    return (
    <div className="col-md-6">
    <div className="footer__righet">
            <div className="d-flex flex-column footer__righet__data">
                <p>Subscribe to our newsletter</p>

                <div className="formfooter flex-fill bd-highlight">
                    
                    <input type="text" className="form-control"
                    id="formGroupExampleInput" placeholder="Enter Your Mail"/>

                    <span className="scendespan">
                        Subscribe
                        <img src={Group1431} className="group1431"/>
                    </span>

                 </div>

                 <div className="d-flex justify-content-between">
                     <div className="listfooter">
                         <ul>
                             <li>About Us</li>
                             <li>Contact Us</li>
                             <li>Track Order</li>
                             <li>Terms & Conditions</li>
                             <li>Privacy Policy</li>
                             <li>Sell With Us</li>
                             <li>Shipping And Returns</li>
                         </ul>
                     </div>
                     <div className="listfooter">
                         <ul>
                             <li>
                                 <img src={Group1432}/>
                                 /YESHTERY
                            </li>
                            <li>
                                 <img src={Group1435}/>
                                 /YESHTERY
                            </li>
                            <li>
                                 <img src={Group1433}/>
                                 /YESHTERY
                            </li>
                            <li>
                                 <img src={Group1434}/>
                                 /YESHTERY
                            </li>
                         </ul>
                     </div>
                 </div> 
            </div>
    </div>
</div>
)
}

export default Footerrighet;
