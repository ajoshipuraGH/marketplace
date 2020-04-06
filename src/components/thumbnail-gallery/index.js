import React, { Component } from 'react'
import ActiveThumbnailWindow from './active-thumbnail-window'
import ActiveThumbnailGrid from './thumbnail-grid'
import axios from 'axios'
import ActiveTextWindow from './gallery-text'

export default class ThumbnailGallery extends Component{
state = {
  thumbnails: [],
  activeIndex: 0
}

componentDidMount(){
  axios.get('thumbnails.json')
  .then(res => {
    this.setState({ thumbnails: res.data.thumbnails })
  })
}

renderThumbnails = () => {
  const { thumbnails, activeIndex } = this.state
  if(thumbnails.length){
    return(
    <>
    <ActiveThumbnailWindow 
          activeThumbnail={thumbnails[activeIndex]}
          />
          <ActiveThumbnailGrid 
          thumbnails={thumbnails}
          handleClick={this.handleClick}
        />
    </>
    )
  }
  return null
}

renderTextContent = () => {
  const { thumbnails, activeIndex } = this.state
  if(thumbnails.length){
    return(

    <ActiveTextWindow 
    activeText={thumbnails[activeIndex]}
    />

    )
  }
  return null
}

handleClick = (e) => {
 const newActiveIndex = e.target.getAttribute('data-index')
 this.setState({activeIndex: newActiveIndex})
}

  render(){

    return(
      <>
            {/* left side */}
          <div className="listingsGallery-image">
              { this.renderThumbnails() }
          </div>

          {/* right side */}
          <div className="listingsGallery-text">
          { this.renderTextContent() }
          </div>
      </>
    )
  }
}
