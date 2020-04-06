import React from 'react'

const Detailtable = () => {
    return(

      <div className="network-table" data-gs-trigger="true" data-gs-delay="0.2" data-gs-anim="fade-in" data-gs-speed="1.0">
        <div className="network-table-header"><img className="esri-logo-partner" src="https://www.esri.com/content/dam/esrisites/en-us/about/events/redlands-forum/assets/logo-esri.png" alt="Esri" /></div>
        <div className="network-table-header font-size-1 avenir-demi">ArcGIS Certified Staff 1-5DD</div>
        <div className="network-table-content">
          <h4 className="network-table-content-subheader font-size-0 avenir-demi">Business needs</h4>
          <ul className="network-table-content-list">
            <li className="font-size--1">Asset Tracking and Analysis</li>
            <li className="font-size--1">Application Development</li>
            <li className="font-size--1">Business Case Development</li>
            <li className="font-size--1">Data Conversion/Migration</li>
            <li className="font-size--1">Data Model & Database Design</li>
            <li className="font-size--1">GIS Strategy and Planning</li>
            <li className="font-size--1">Hosting Services</li>
          </ul>
          <h4 className="network-table-content-subheader font-size-0 avenir-demi">Industries</h4>
          <ul className="network-table-content-list">
            <li className="font-size--1">Electric and gas</li>
          </ul>
          <h4 className="network-table-content-subheader font-size-0 avenir-demi">Works With</h4>
          <ul className="network-table-content-list">
            <li className="font-size--1">ArcGIS Online</li>
            <li className="font-size--1">ArcGIS Pro</li>
            <li className="font-size--1">ArcGIS Enterprise</li>
            <li className="font-size--1">ArcGIS Apps</li>
          </ul>
          <h4 className="network-table-content-subheader font-size-0 avenir-demi">Platform</h4>
          <ul className="network-table-content-list">
            <li className="font-size--1">Mobile</li>
            <li className="font-size--1">Desktop</li>
            <li className="font-size--1">Web</li>
            <li className="font-size--1">On-premises</li>
          </ul>
          <h4 className="network-table-content-subheader font-size-0 avenir-demi">System Requirements</h4>
          <p className="font-size--1">Requires the customer to have appropriate licenses for ArcGIS to access data available via the Esri Marketplace.</p>
          <h4 className="network-table-content-subheader font-size-0 avenir-demi">Version</h4>
          <p>1.0</p>
          <h4 className="network-table-content-subheader font-size-0 avenir-demi">Contact Provider</h4>
          <p>
            <a className="font-size--1" href="https://www.dtn.com">https://www.dtn.com</a>
            <a className="font-size--1" href="mailto:matt.gaffner@dtn.com">Email</a>
            <a className="font-size--1" href="mailto:technicalsupport@dtn.com">Technical Support</a>
            <span className="font-size--1 phone">405-579-7675 x239</span>
          </p>
        </div>
      </div>

    )
}

export default Detailtable
