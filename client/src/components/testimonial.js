import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default class Testimonials extends Component {
  render() {
    return (
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <div>
          <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--0SCWkYwS--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/9dhr4cw2s0skgfig8qnw.png" />
          <div className="myCarousel">
            <h3>Shirley Fultz</h3>
            <h4>Developer</h4>
            <p>
              It's freeing to be able to catch up on feedback of my producr
              easily and effectively. Feedbacky help me to save time by
              automating the feedback process.
            </p>
          </div>
        </div>

        <div>
          <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--gRFMHqWs--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/1xwiaya5i7wweic3pz96.png" />
          <div className="myCarousel">
            <h3>Daniel Keystone</h3>
            <h4>Designer</h4>
            <p>
              The simple and intuitive design makes it easy for me use. I highly
              recommend Feedbacky to my peers.
            </p>
          </div>
        </div>

        <div>
          <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--nSI8V6RE--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/81co8nilff5r9eer3xga.png" />
          <div className="myCarousel">
            <h3>Theo Sorel</h3>
            <h4>Designer</h4>
            <p>FeedBacky make the whole process very easy and effective...</p>
          </div>
        </div>
      </Carousel>
    );
  }
}
