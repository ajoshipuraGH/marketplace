import React from 'react'

const Starreview = ({ rating }) => {
    let productrating = rating;
    let starTotal = 5;
    const starPercentage = (productrating / starTotal) * 100;
    const starPercentageRounded = `${(Math.round(starPercentage / 10) * 10)}%`;

    console.log(starPercentageRounded)
    
    return(
        <>
            <div className="star-ratings-wrapper">
                <div className="star-ratings-blank"></div>
                <div className="star-ratings-filled" id="starfilled" style={{width:starPercentageRounded}}></div>
            </div>
            <div className="rating-text">({ rating })</div>
        </>
    )
}

export default Starreview

