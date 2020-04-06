import React, { Component } from 'react'
import Casecards from './case-cards'

export default class Casestudies extends Component {

  render() {

    return (
      <>
        <div className="two-thirds-tile-divide">
          <section className="two-thirds-tile-divide_container white">
              <div className="left">
                <div className="two-thirds-tile-divide-content darktheme">
                  <div data-gs-anim="fade-right">
                      <h2 className="font-size-5 avenir-light">Connects with the Autodesk AEC Collection</h2>
                      <hr className="separator" />
                      <div className="font-size-0 avenir-light">
                        <p>ArcGIS with Autodesk Architecture, Engineering, &amp; Construction Collection helps you collect and analyze data from the field, improve communication with key stakeholders, and puts your projects into a geographic context to help understand the impacts to the environment.</p>
                      <p><a href="http://www.esri.com" className="cta-buttons-actions-link cta-buttons--actions-cta m" data-primary="true" >30 character max</a></p>

                      </div>
                  </div>
                </div>
              </div>
              
              <div className="right">
                <div className="two-thirds-tile-divide-tiles block-group block-group-2-up tablet-block-group-1-up phone-block-group-1-up"> 
                  <Casecards />
                </div>
              </div>    
          </section>
        </div>
      </>
        )
      }
};