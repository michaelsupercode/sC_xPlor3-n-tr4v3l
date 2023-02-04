import React from 'react';

import FeaturedDestinationsItems from '../components/FeaturedDestinationsItems.js';



const Destinations = () => {
    return (
        <main>
            <section className="destinationsMain">
                <article>
                    <h2>Featured Destinations</h2>
                    <a className="viewAll" href="#">..view them all..</a>
                </article>
                <FeaturedDestinationsItems />
            </section>
        </main>
    );
}

export default Destinations;

