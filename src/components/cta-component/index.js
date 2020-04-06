import React, { Component } from 'react'

export default class Ctasection extends Component {

  render() {

    return (
      <>
    <div className="cta-container">
      <div className="cta-questions dark">
        <div className="grid-container ctaprimary" data-attribute="product-listing">
          <div className="cta-questions_primary-dbl-button-column-container">
            <div className="column-11 tablet-column-12 leader-1 text-center">
              <h2 className="cta-questions_heading avenir-light font-size-4">Try this product</h2>
              <a href="http://www.esri.com" className="btn btn-large cta-primary_cta--primary"
                data-event="track-component" data-component-name="CTA Container"
                data-component-link="Try this product - Try this" data-component-link-placement="0"
                data-component-link-type="button">Try this</a>
            </div>
            <div className="column-2 phone-column-6 tablet-column-12 text-center">
              <div className="horz-pipe"></div>
            </div>
            <div className="column-11 tablet-column-12 leader-1 text-center">
              <h2 className="cta-questions_heading avenir-light font-size-4">Purchase this product</h2>
              <a href="http://www.esri.com" className="btn btn-large cta-primary_cta--primary"
                data-event="track-component" data-component-name="CTA Container"
                data-component-link="Purchase this product - Purchase"
                data-component-link-placement="0" data-component-link-type="button">Purchase</a>
            </div>
          </div>
        </div>
        <div className="grid-container padding-leader-2 padding-trailer-2" data-attribute="services-listing">
				  <div className="column-16 pre-4 trailer-half text-center">
            <h2 className="cta-primary-button_title cta-questions_heading avenir-light font-size-4 leader-half">Find out how Esri can help your organization.</h2> 
              <a href="http://www.esri.com/industries/petroleum/get-started" className="btn btn-large cta-primary-button-anchor">Get started</a>
          </div>
			  </div>
      </div>
    </div>
      </>
        )
      }
};