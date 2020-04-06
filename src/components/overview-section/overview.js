import React from 'react'
import Detailtable from './detail-table'

const Overview = () => {

  return (
    <>
      <div className="grid-container leader-2">
        <div className="column-16 ">
          <div className="tab-section-title">
            <h1 className="font-size-4">Overview</h1>
            <hr className="seperator" />
          </div>
          <div className="tab-section-content-section">
            <div className="column-14">
              <h2 className="avenir-medium font-size-2 "> About GeoMarvel LLCS</h2>

              <p>GeoMarvel is a geographical software development company and Esri Business Partner based out of Alexandria, Virginia. As an Esri Business Partner, we specialize in implementing a plethora of comprehensive GIS tools and applications. We are proficient in workforce optimization, cloud infrastructure, data analysis, computing, and developing custom applications & visualizations. With over 20 years of relevant experience, GeoMarvel has proven that it can implement scalable infrastructure and software solutions.</p>
              <p>Our business portfolio is comprised of entities from all across the spatial globe, ranging from members of the Fortune 500 list, various non-profits, disaster relief organizations, to large electric utility companies and local governments.</p>
              <p>Our mission as an organization is to provide our customers with state-of-the-art solutions by sustaining an active role in the geospatial community by contributing to a variety of industries.</p>

              <h2 className="avenir-medium font-size-2 "> Our Services</h2>
              <ul>
                <li>Latest Radar - US &amp; Canada combined</li>
                <li>Radar Loop (3hr) - US &amp; Canada combined</li>
                <li>Global Lightning Strikes</li>
                <li>Fronts &amp; Pressure Centers (North America)</li>
                <li>Global Tropical Storm Past Track, Current Location and Forecast Track/Intensity</li>
                <li>Thunderstorm and Fire Outlooks</li>
                <li>Current U.S. Surface Weather Analysis (temperature, dew point, relative humidity, wind speed &amp;
                direction, and visibility)</li>
                <li>Severe Weather Reports (wind, tornado, hail, etc.)</li>
                <li>Global Surface Weather Observations</li>
                <li>National Weather Service Watches, Warnings &amp; Advisories</li>
                <li>Current IR Satellite - Global</li>
                <li>IR Satellite Loop (3 hr) - Global&nbsp;</li>
                <li>Current IR and Visible - North America</li>
                <li>Rainfall Accumulation (Global)</li>
                <li>Global Weather Forecasts</li>
                <li>U.S. Lightning Prediction (1 hr)</li>
                <li>Snow and Ice Outlooks</li>
              </ul>
              <h2 className="avenir-medium font-size-2 ">Services provided</h2>
              <p>Application Development, Business Case Development, Data Conversion/Migration, Data Model & Database Design, GIS Strategy and Planning, Implementation, Needs and Requirements, System Architecture and Design, System Integration, Training Services           </p>
            </div>
          </div>
        </div>

        <div className="column-8 tablet-leader-4">
        <Detailtable />
        </div>
      </div>
    </>
  )
}

export default Overview
