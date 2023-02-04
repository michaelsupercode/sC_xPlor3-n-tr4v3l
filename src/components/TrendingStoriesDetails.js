import React from 'react';

const TrendingStoriesDetails = (props) => {
    return ( <div>
            <img className = "trendingStoriesImg" src = { props.img } alt = { props.headline } /> 
            <h3> { props.headline } </h3> 
            <p> { props.text } </p> 
            <a className = "viewAll" href = { props.link } >..Read Some More.. </a> 
            </div>
    );
}

export default TrendingStoriesDetails;