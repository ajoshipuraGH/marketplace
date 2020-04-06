import React, { Component } from 'react'
import axios from 'axios'


export default class Reviewlist extends Component{
  state = {
    reviews: [],
    totalreviews: '',
    reviewIndex: 0
  }
  
  componentDidMount(){
    axios.get('reviews.json')
    .then(res => {

    const newsum = res.data.reviews.reduce((accumulator, currentValue) => accumulator + currentValue.rating, 0);
    const totalrecords = res.data.reviews.length;
    let starTotal = 5;
    const totalpercentrating =  `${((newsum / (totalrecords * starTotal)) * 100)}%`;
    const totalvaluerating = (Math.round(newsum / (totalrecords))); 

      this.setState({ 
        newsum: newsum,
        totalrecords: totalrecords,
        totalvaluerating: totalvaluerating,
        totalpercentrating: totalpercentrating,
        reviews: res.data.reviews,
      });      
    })
  }

  
    render(){

      return(
       <>
       <div className="reviews-header padding-leader-2 padding-trailer-2">
         <div className="reviews-header-title font-size-4">Average Rating</div>
      <div className="reviews-header-star">

      <div className="star-ratings-wrapper">
                <div className="star-ratings-blank"></div>
                <div className="star-ratings-filled" id="starfilled" style={{width: `${this.state.totalpercentrating}`}}></div>
            </div>
      </div>
         <div className="reviews-header-rating font-size-4">{this.state.totalvaluerating}/5</div>
         <div className="reviews-header-signin font-size-0 leader-half"><a href="http://www.esri.com">Sign in to leave a review</a></div>
         <div className="overall-rating font-size-0 leader-half right">{this.state.totalrecords} total reviews</div>

       </div>
       <div className="review-sections">
        {this.state.reviews.map((review, i) => {
              const reviewrating = `${review.rating}`;
              let starTotal = 5;
              const reviewPercentage = (reviewrating / starTotal) * 100;
              const reviewPercentageRounded = `${(Math.round(reviewPercentage / 10) * 10)}%`;
              

            return(
              <React.Fragment key={i}>
                <div className="review-section">
                  <div className="review-section-image">
                    <img src={review.imageUrl} alt="{review.name}"/>
                  </div>
                  <div className="review-section-content">
                    <div className="review-section-content-name font-size-2">{review.name}</div>
                    <div className="review-section-content-star">
                      <div className="star-ratings-wrapper small leader-half trailer-half">
                        <div className="star-ratings-blank small"></div>
                        <div className="star-ratings-filled small" id="starfilled" style={{width:reviewPercentageRounded}}></div>
                      </div>
                    </div>
                    <div className="review-section-content-description">
                      <p className="font-size-0"> {review.bodytext}</p>
                    </div>
                  </div>
                  <div className="review-section-time">{review.time}</div>
                </div>
              </React.Fragment>
            ) 
          })}
        </div>
      </>
            
        
      )
    }
  }
  
  