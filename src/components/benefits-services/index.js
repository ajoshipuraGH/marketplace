import React, { Component } from 'react'
import Servicescards from './services-cards'

export default class Benefits extends Component {

  render() {

    return (
      <>
        <div className="text-link-stack-icon-series">
          <div className="padding-leader-3 padding-trailer-3 grid-container">
            <div className="text-link-stack-icon-series">
              <div className="image-series column-24">
                <div className="headercontainer trailer-2 textdark">
                  <h2 className="headertitle font-size-4 avenir-light">Esri Store</h2>
                </div>
                <div className="block-group block-group-4-up tablet-block-group-2-up phone-block-group-1-up">
                  <Servicescards />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
        )
      }
};