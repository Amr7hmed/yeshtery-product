import React from 'react';
import Starregular from '../../images/star-regular.svg';
import Starsolid from '../../images/star-solid.svg';


export default function Stars(props) {

    // Stars Array  
    const Arraystars =[Starsolid,Starsolid,Starsolid,Starsolid,Starsolid];
    const {review,reviewdtals,reviewpepole}=props;
    
    return (<div className="carditem stars">
                {Arraystars.
                    fill(Starregular,review)
                    .map((item,index)=>
                    <img src={item} className="startimg" key={index}/>
                    )}

                <span className="startsdec">{reviewdtals}</span>
                <span className="startsdecend">{reviewpepole}</span>
        </div>
    )
}