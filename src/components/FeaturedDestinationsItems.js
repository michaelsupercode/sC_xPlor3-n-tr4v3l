import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import FeaturedDestData from '../data/FeaturedDestData.js';
import FeaturedDestinationsDetails from './FeaturedDestinationsDetails.js';

class FeaturedDestinationsItems extends React.Component {
    render() {
        return (
            <article className="destinationImages">
                {
                    FeaturedDestData.map(elt => 
                    <FeaturedDestinationsDetails 
                        key={uuidv4()}
                        img={elt.img}
                        location={elt.location}
                        country={elt.country}
                    />)
                }          
            </article>
        );
    }
}

export default FeaturedDestinationsItems;
