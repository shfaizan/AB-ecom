import React, { Component } from 'react';
import Textfit from 'react-textfit';
import classes from './IAQaudit.module.css';
import IAQ from '../../../assets/IAQ.jpg';
import history from '../../../containers/history';
class IAQaudit extends Component {
  state = {
    isOpen1: false,
    isOpen2: false,
  };
  render() {
    return (
      <>
        <div className={classes.content}>
          <div className={classes.contentImage}>
            <p style={{ display: 'table-cell', verticalAlign: 'middle' }}>
              <img className={classes.contentPic} alt="" src={IAQ} />
            </p>
          </div>
          <div className={classes.contentRight}>
            <div className={classes.contentDiv}>
              <h2 className={classes.textField}>
                Book One Time Indoor Air Quality Evaluation with ActiveBuildings
              </h2>
              <h4 className={classes.header4}>Price: &#x20B9; 1299</h4>
              <p className={classes.para}>
                ActiveBuildings indoor Air Quality Evaluation will test your
                space for seven major indoor air pollutants that are very
                harmful and may cause severe health complications if left
                unchecked. Our air quality evaluation will ensure all problem
                areas are accurately identified. The evaluation is also followed
                up with consultation by our team of experts to guide you in
                choosing the best solution for your indoor air quality needs
              </p>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingBottom: '15px',
                }}
              >
                <button
                  className={classes.button1}
                  onClick={() => history.push('/IAQ-audit-home')}
                >
                  BUY NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default IAQaudit;
