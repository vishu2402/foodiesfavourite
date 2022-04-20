import React from 'react';

import './Chef.css';
import { SubHeading } from '../../components';
import { images } from '../../constants';
const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.cheff} alt="chef"/>
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant">What We Believe In</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">We see our customers as invited guests to a party, and we are the hosts, It's our job every day to make every important aspect of the customer experience a little bit better</p>
        </div>
        <p className="p__opensans">Although the skills aren't hard to learn, finding the satisfaction and finding fulfillment in continuously serving somebody else something good to eat, is what makes a really good restaurant</p>
      </div>

      <div className="app__chef-sign">
        <p>Dannis Jameson</p>
        <p className="p__opensans">Chef and Founder</p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;
