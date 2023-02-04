import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import TrendingStoriesData from '../data/TrendingStoriesData.js';
import TrendingStoriesDetails from './TrendingStoriesDetails.js';

class TrendingStoriesItems extends React.Component {
    render() {
        return (
            <section className="partnerImages">
                {
                    TrendingStoriesData.map(elt => 
                    <TrendingStoriesDetails 
                        key={uuidv4()}
                        img={elt.img}
                        headline={elt.headline}
                        text={elt.text}
                        link={elt.link}
                    />)
                }
                
            </section>
        );
    }
}

export default TrendingStoriesItems;
