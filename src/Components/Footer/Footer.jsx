import React from 'react';
import Footerleft from './Footerleft';
import Footerrighet from './Footerrighet';
import Rectangle586 from '../../images/Rectangle 586@2x.png';
import Group1437 from '../../images/Group 1437@2x.png';
import Group1438 from '../../images/Group 1438@2x.png';
import Group1439 from '../../images/Group 1439.svg';

function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <Footerleft/>
                    <Footerrighet/>
                </div>
            </div>
            <div className="footer__end">
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                            <div className="col-md-6 footer__end__copyrighet">
                                © 2021 yeshtery, all rights reserved.
                            </div>    
                            <div className="col-md-6 footer__end__powered">
                                    <div>
                                        <img src={Rectangle586}/>
                                        <img src={Group1437}/>
                                        <img src={Group1438}/>
                                    </div>
                                    <div>
                                        Powered By
                                        <img src={Group1439} className="group1439"/>
                                    </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
