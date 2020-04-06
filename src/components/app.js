import React, { Component } from 'react';
import ThumbnailGallery from './thumbnail-gallery'
import Overviewsection from './overview-section'
import '../App.scss';
import Overview from './overview-section/overview';
import Benefits from './benefits-services';
import Casestudies from './case-studies';
import Provider from './provider-info';
import Ctasection from './cta-component';

export default class App extends Component{
  render(){
    return(
      <>
      {/* gallery section */}
      <div className="listingsGallery">
        <div className="grid-container">
          <div className="listingsGallery-wrapper">
          <ThumbnailGallery />
          </div>
        </div>
      </div>

      {/* overview section */}

      <div className="overview-section leader-2" >
        <>
        {/* if products page */}
        <div data-attribute="product-listing">
          <Overviewsection />
        </div>
         {/* if services page */}
         <div data-attribute="services-listing" className="leader-4 trailer-4">
          <Overview />
        </div>
        </>
      </div>

      {/* Benefits and key sections  */}
      <div className="benefits">
        <Benefits />
      </div>

       {/* case studies  */}
       <div className="casestudies" data-attribute="services-listing">
        <Casestudies />
      </div>

      {/* provider more information   */}
      <div className="more-from-provider">
        <Provider />
      </div>

      {/* provider more information   */}
      <div className="ctasection">
        <Ctasection />
      </div>

      </>

    )
  }
}



