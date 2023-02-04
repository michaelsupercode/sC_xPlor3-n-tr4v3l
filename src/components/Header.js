import React from 'react';

import Nav from '../components/Nav.js';

class Header extends React.Component {
    render() {
        return (
            <header>
                <Nav />
                <section class="heroForm">
                    <article>
                        <h1>Explore and Travel</h1>
                        <h3>Holiday Finder</h3>
                        <form action="">
                            <div>
                                <select name="location" id="location">
                                    <option value="">Location</option>
                                    <option value="africa">Africa</option>
                                    <option value="antartica">Antartica</option>
                                    <option value="asia">Asia</option>
                                    <option value="europe">Europe</option>
                                    <option value="america">America</option>
                                </select>
                                <select name="activity" id="activity">
                                    <option value="">Activity</option>
                                    <option value="activity0">Activity 0</option>
                                    <option value="activity1">Activity 1</option>
                                    <option value="activity2">Activity 2</option>
                                    <option value="activity3">Activity 3</option>
                                </select>
                            </div>
                            <div>
                                <select name="grade" id="grade">
                                    <option value="">Grade</option>
                                    <option value="grade0">Grade 0</option>
                                    <option value="grade1">Grade 1</option>
                                    <option value="grade2">Grade 2</option>
                                    <option value="grade3">Grade 3</option>
                                </select>
                                <select name="date" id="date">
                                    <option value="">Date</option>
                                    <option value="date0">Date 0</option>
                                    <option value="date1">Date 1</option>
                                    <option value="date2">Date 2</option>
                                    <option value="date3">Date 3</option>
                                </select>
                            </div>
                            <input class="orangeButton" type="submit" value="Explore" />
                        </form>
                    </article>
                    <img src="./img/hero.png" alt="hero image" />
                </section>
            </header>
        );
    }
}

export default Header;