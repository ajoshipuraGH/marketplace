import React from 'react'

const Thumbnail = ({ imgUrl, handleClick, index }) => {
    return(
        <div className="listingsGalleryThumbnail-wrapper">
            <div className="listingsGalleryThumbnail" style={{ backgroundImage: "url(" + imgUrl + ")" }} onClick={handleClick} data-index={index}>
           </div>
        </div>
    )
}

export default Thumbnail

