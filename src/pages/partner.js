import React from 'react';

// Components
import TrendingStoriesItems from '../components/TrendingStoriesItems.js';



const Partner = () => {
    return (
        <main>
            <section className="testimonials">
                <article>
                    <div>
                        <img src="./img/star.png" alt="star" />
                        <img src="./img/star.png" alt="star" />
                        <img src="./img/star.png" alt="star" />
                        <img src="./img/star.png" alt="star" />
                        <img src="./img/star.png" alt="star" />
                    </div>
                    <p>“Quisque in lacus a urna fermentum euismod. Integer mi nibh, dapibus ac scelerisque eu, facilisis quis purus. Morbi blandit sit amet turpis nec”</p>
                    <h3>Edward Newgate</h3>
                    <p>Founder Circle</p>
                </article>
                <img src="./img/edwardNewgate.png" alt="Edward Newgate" />
            </section>
            <section className="partnerMain">
                <article>
                    <h2>Trending Stories</h2>
                    <a className="viewAll" href="#">..view them all..</a>
                </article>
                <TrendingStoriesItems />
            </section>
            

        </main>
    );
}

export default Partner;

