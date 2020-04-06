import React from 'react'

const ActiveThumbnailWindow = ({ activeThumbnail }) => {
    
    return(
        <div className="listingsGallery-image-wrapper">
            <div className="listingsGallery-mainimage" style={{ backgroundImage: "url(" + activeThumbnail.imgUrl + ")" }}>
           </div>
        </div>
    )
}

export default ActiveThumbnailWindow

