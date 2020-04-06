import React, { Component } from 'react'
import Productinfo from './product-cards'
import Serviceinfo from './service-cards'


export default class Providerinfo extends Component {

  render() {

    return (
      <>
      {/* services */}
      <div className="more-information padding-leader-3 padding-trailer-4" data-attribute="services-listing" data-gs-trigger="true" data-gs-delay="0.2" data-gs-anim="fade-in" data-gs-speed="1.0">
            <h2 className="text-white text-center trailer-2">More about this service</h2>
            <div className="grid-container">
              <div className="block-group block-group-3-up tablet-block-group-3-up phone-block-group-1-up">
               <Serviceinfo />
              </div>
            </div>
        </div>

 {/* product */}
 <div className="more-information  padding-leader-2 padding-trailer-2" data-attribute = "product-listing">
 <Productinfo />
</div>
      </>
        )
      }
};