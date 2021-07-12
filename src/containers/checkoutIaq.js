import React, { Component } from 'react';
import classes from './checkout.module.css';
import IAQ from '../assets/IAQ.jpg';
class checkoutIaq extends Component {
  render() {
    return (
      <div className={classes.displayItems}>
        <img src={IAQ} className={classes.imageCheckout} />
        <h2 className={classes.paraText}>
          One time IAQ evaluation for your home(1BHK/2BHK/3BHK)
        </h2>
        <div className={classes.text}>
          <p>Price: &#8377; 1299</p>
          <hr />
          <p>Price: &#8377; 1299</p>

          <hr />
          <p>Total: &#8377; 1299</p>
        </div>
      </div>
    );
  }
}
export default checkoutIaq;
