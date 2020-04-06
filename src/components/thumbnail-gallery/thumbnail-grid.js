import React from 'react'
import Thumbnail from './thumbnail'

const ActiveThumbnailGrid = ({ thumbnails, handleClick }) => {
    return(
        <div style={activeThumbnailGridStyle} className="listingsGallery-thumbnails">
            {
                thumbnails.map((thumbnail, i) => {
                    return(
                        <Thumbnail 
                        key={thumbnail.imgUrl}
                        imgUrl={thumbnail.imgUrl}
                        title={thumbnail.title}
                        handleClick={handleClick}
                        index={i}
                        />
                    )
                })
            }
        </div>
    )
}

export default ActiveThumbnailGrid


const activeThumbnailGridStyle = {
    height: '35%',
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap'
}