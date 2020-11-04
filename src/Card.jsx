import React from 'react';
import 'tachyons';
const Card =({name,id,email})=> {
    return (

        <div className="bg-light-blue dib br3 pa3 ma2 grow shadow-5">

            <img src={`https://robohash.org/${id}?200*200`} alt="photos"></img>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;