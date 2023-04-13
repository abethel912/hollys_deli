import React from 'react';

import { SubHeading } from '../../components';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits your palatte" />
      <h1 className="headtext__cormorant">Today&apos;s Special</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">Breakfast</p>
        <div className="app__specialMenu_menu_items">
          
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src='https://scontent-bos5-1.xx.fbcdn.net/v/t39.30808-6/337010173_942985873505205_6591094625723593195_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=h1RKskzrwAUAX8M7hA8&_nc_ht=scontent-bos5-1.xx&oh=00_AfAOnRnF4qJYBTOU0sB9vdYaSCkm8Pam_YZWs_4Ozvs73w&oe=643BE150' alt="menu__img" />
      </div>

      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading">Lunch</p>
        <div className="app__specialMenu_menu_items">
        </div>
      </div>
    </div>

    <div style={{ marginTop: 15 }}>
      <button type="button" className="custom__button">View More</button>
    </div>
  </div>
);

export default SpecialMenu;
