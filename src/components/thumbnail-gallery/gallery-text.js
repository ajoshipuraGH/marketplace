import React from 'react'
import Starreview from './starreview'

const ActiveTextWindow = ({ activeText }) => {

    return(
        <>
            <div className="listingsGallery-header">
                <div className="listingsGallery-header-logo"><img src={activeText.iconUrl} alt="{activeText.title}"/></div>
                <div className="listingsGallery-header-content">
                        <p className="listingsGallery-header-cat avenir-demi">{activeText.category}</p>
                        <p className="listingsGallery-header-heading avenir-light">{activeText.title}</p>
                        <p className="listingsGallery-header-subheader avenir-light">{activeText.subheader}</p>
                </div>
            </div>
            {/* product listings section */}
            <div className="product-listings" data-attribute = "product-listing">
                <div className="listingsGallery-review">
                    <Starreview 
                    rating={activeText.rating}
                    />
                </div>
                <div className="listingsGallery-description">
                    <p>{activeText.bodytext}</p>
                </div>
                <div className="listingsGallery-cta cta-buttons lighttheme">
                        <div className="cta-buttons--actions">
                            <a scale="l" href={activeText.purchaseURL} className="cta-buttons--actions-cta" data-primary="true" >Purchase</a>
                            <a scale="l" href={activeText.freetrialURL} className="cta-buttons-actions-link cta-buttons--actions-cta">Free trial</a>
                        </div>
                </div>

                <div className="listingsGallery-price">
                    <div className="listingsGallery-price-text"> {activeText.pricing}</div>
                    <div className="listingsGallery-price-currency">
                        <select>
                            <option defaultValue>USD</option>
                            <option>EUR</option>
                            <option>GBP</option>
                            <option>JPY</option>
                            <option>CAD</option>
                            <option>AUD</option>
                        </select>
                    </div>
                    
                </div>

                <div className="listingsGallery-appstore">
                        <a href="http://www.esri.com"><img src="https://www.esri.com/content/dam/esrisites/en-us/common/badges/png/itunes.png" alt="Buy at Apple store"></img></a>
                        <a href="http://www.esri.com"><img src="https://www.esri.com/content/dam/esrisites/en-us/common/badges/png/googleplay.png" alt="Buy at Google store"></img></a>
                        <a href="http://www.esri.com"><img src="https://www.esri.com/content/dam/esrisites/en-us/common/badges/png/android.png" alt="Buy at Play store"></img></a>
            </div>
            </div>

            {/* service listings section */}
            <div className="service-listings" data-attribute = "services-listing">

                <div className="listingsGallery-cta cta-buttons lighttheme">
                    <div className="cta-buttons--actions">
                        <a scale="xl" href={activeText.purchaseURL} className="cta-buttons--actions-cta" data-primary="true">Contact provider</a>
                    </div>
                </div>
                <div className="listingsGallery-specialities">
                    <h3 className="listingsGallery-specialities-header font-size-2 leader-2">Partner Specialities</h3>
                    <div className="listingsGallery-specialities-icons">
                        <div className="specialities-icon">
                            <img  src="https://www.esri.com/content/dam/esrisites/en-us/marketplace/test-assets/marketplace-service-listings-partner-badge-marketplace-specialty-176x46.png" alt="public safety"/>
                        </div>
                        <div className="specialities-icon">
                            <img  src="https://www.esri.com/content/dam/esrisites/en-us/marketplace/test-assets/marketplace-service-listings-partner-badge-federal-business-specialty-176x46.png" alt="public safety"/>
                        </div>
                        <div className="specialities-icon">
                            <img  src="https://www.esri.com/content/dam/esrisites/en-us/marketplace/test-assets/marketplace-service-listings-partner-badge-marketplace-specialty-176x46.png" alt="public safety"/>
                        </div>
                        <div className="specialities-icon">
                            <img  src="https://www.esri.com/content/dam/esrisites/en-us/marketplace/test-assets/marketplace-service-listings-partner-badge-imagery-specialty-176x46.png" alt="public safety"/>
                        </div>
                        <div className="specialities-icon">
                            <img  src="https://www.esri.com/content/dam/esrisites/en-us/marketplace/test-assets/marketplace-service-listings-partner-badge-arcgis-online-specialty-176x46.png" alt="public safety"/>
                        </div>

                    </div>
                </div>


            </div>



        </>
    )
}

export default ActiveTextWindow
