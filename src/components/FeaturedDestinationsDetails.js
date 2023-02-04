import React from 'react';

const FeaturedDestinationsDetails = (props) => {
    return (
        <div>
            <img src={props.img} alt={props.location} />
            <div>
                <h3>{props.location}</h3>
                <p>{props.country}</p>
            </div>
        </div>
    );
}

export default FeaturedDestinationsDetails;