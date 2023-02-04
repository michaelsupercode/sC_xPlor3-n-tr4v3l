import React from 'react';

const Footer = () => {
    return (
        <footer>
            <section className="footerTextAndLinks">
                <article className="footerText">
                    <img src="/img/logo.png" alt="logo" />
                    <p>Plan and book your perfect trip with
                        expert advice, travel tips destination
                        information from us</p>
                    <p>©2023 Thousand Sunny. All rights reserved</p>
                </article>
                <article className="footerUl">
                    <h3>Destinations</h3>
                    <ul>
                        <li><a href="#">Africa</a></li>
                        <li><a href="#">Antarctia</a></li>
                        <li><a href="#">Asia</a></li>
                        <li><a href="#">Europe</a></li>
                        <li><a href="#">America</a></li>
                    </ul>
                </article>
                <article className="footerUl">
                    <h3>Shop</h3>
                    <ul>
                        <li><a href="#">Destination Guides</a></li>
                        <li><a href="#">Pictorial & Gifts</a></li>
                        <li><a href="#">Special Offers</a></li>
                        <li><a href="#">Delivery Times</a></li>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                </article>
                <article className="footerUl">
                    <h3>Interest</h3>
                    <ul>
                        <li><a href="#">Adventure Travel</a></li>
                        <li><a href="#">Art and Culture</a></li>
                        <li><a href="#">Wildlife and Nature</a></li>
                        <li><a href="#">Family Holidays</a></li>
                        <li><a href="#">Food and Drink</a></li>
                    </ul>
                </article>
            </section>
            <section className="footerSocialMedia">
                <a href="#"><img src="/img/twitter.png" alt="twitter logo" /></a>
                <a href="#"><img src="/img/facebook.png" alt="facebook logo" /></a>
                <a href="#"><img src="/img/instagram.png" alt="instagram logo" /></a>
                <a href="#"><img src="/img/youtube.png" alt="youtube logo" /></a>
<p>2023_rebuild_michaelsuperCode_revised version</p>
            </section>
        </footer>
    );
}

export default Footer;