import React from 'react';

import { SubHeading } from '../../components';

import { images } from '../../constants';

import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div classNme="app_wrapper_info">
      <SubHeading title="Good food and great vibes" />
      <h1 className="app__header-h1">Rain or Shine,</h1>
      <h1 className="app__header-h1">it's time</h1>
      <h1 className="app__header-h1">to dine</h1>
      <p className="p__opensans" style={{ margin: '2rem 0'}}>When you are able to shift your inner awareness to how you can serve others, </p>
      <p className="p__opensans" style={{ margin: '2rem 0'}}>and when you make this the central focus of your life,</p>
      <p className="p__opensans" style={{ margin: '2rem 0'}}>you will then be in a position to know true miracles in your progress toward prosperity</p>
      <button type="button" className="custom__button">Explore Cuisines</button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcomingguests} alt="header img"/>
    </div>
  </div>
);

export default Header;
