import React from 'react'
import Overview from './overview'
import Reviewlist from './review'



const Tabbedswitcher = () => {
    return (
        <div className="tabbedcontentswitcher listingswitcher">
            <div className="tabbed-content-switcher-wrap padding-trailer-4">
                <div className="tabbed-content-switcher light">
                    <section>
                        <div className="grid-container">
                            <div className="column-24 padding-leader-2">
                                <div className="middleslider padding">
                                    <div className="tabs-transparent leader-1">
                                        <div className="tabbed-content-switcher-nav no-icon">
                                            <button className="tabbed-content-switcher-nav-left hide"> <i className="icon-ui-left"></i></button>
                                            <nav className="tab-nav">
                                                <button className="tab-title tab1 is-active" data-tab="1"> <span data-tab="1">Overview</span></button>
                                                <button className="tab-title tab2" data-tab="2"> <span data-tab="2">Reviews</span></button>
                                            </nav>
                                            <button className="tabbed-content-switcher-nav-right hide"><i className="icon-ui-right"></i></button>
                                        </div>
                                        <section className="tab-contents">
                                            <article className="tab-section overview is-active">
                                                <Overview />
                                            </article>
                                            <article className="tab-section reviews" id="review">
                                            <Reviewlist />
                                            </article>
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Tabbedswitcher

