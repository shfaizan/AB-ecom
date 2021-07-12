import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import styles from './confirm.module.css';
import IAQ from '../../../assets/IAQ.jpg';
import React from 'react';

const Confirm = ({
  nextStep,
  prevStep,
  values: {
    firstName,
    surName,
    email,
    phoneNumber,
    appartment,
    address,
    product,
    price,
  },
}) => {
  const nextPage = () => {
    nextStep();
  };
  const backFlow = (e) => {
    e.preventDefault();
    prevStep();
  };

  return (
    <>
      <div className={styles.section}>
        <div className={styles.orderDisplay}>
          <div style={{ float: 'left' }}>
            <h2 className={styles.header}>
              Full Name:{' '}
              <span className={styles.order}>
                {' '}
                {firstName} {surName}
              </span>
            </h2>
          </div>
          <div style={{ float: 'right' }}>
            <h2 className={styles.header}>
              Phone No: <span className={styles.order}>+91{phoneNumber}</span>
            </h2>
          </div>
        </div>
        <div className={styles.orderDisplay}>
          <div style={{ float: 'left' }}>
            <h2 className={styles.header}>
              Email: <span className={styles.order}>{email}</span>
            </h2>
          </div>
          <div style={{ float: 'right' }}>
            <h2 className={styles.header}>
              Appartment No: <span className={styles.order}>{appartment}</span>
            </h2>
          </div>
        </div>
        <div className={styles.locality}>
          <h2 className={styles.header}>
            Address: <span className={styles.order}>{address}</span>
          </h2>
        </div>
        <div className={styles.service}>
          <div>
            <img src={IAQ} alt=" " className={styles.image} />
          </div>
          <div className={styles.headerTwo}>
            <h2>One time IAQ evaluation for</h2>
            <h2>your home(1BHK/2BHK/3BHK)</h2>
          </div>
          <div className={styles.headerThree}>
            <h3>Total Price</h3>
            <h3 style={{ margin: '1vh' }}>&#8377; 1299</h3>
          </div>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          marginTop: '2vh',
        }}
      >
        <Button variant="contained" onClick={backFlow}>
          Edit
        </Button>
        <Button variant="contained" color="primary" onClick={nextPage}>
          Continue
        </Button>
      </div>
    </>
  );
};

const useStyles = makeStyles({
  root: {
    width: '59%',
  },
  title: {
    fontSize: 13,
    margin: 6,
  },
  pos: {
    margin: 6,
  },
});

export default Confirm;
