import { Link } from 'react-router-dom';
import classes from './success.module.css';

const Success = () => {
  return (
    <div className={classes.container}>
      <div className={classes.card}>
        <div className={classes.payment}>
          <div className={classes.payment_header}>
            <div className={classes.check}>
              <i className="fa fa-check" aria-hidden="true"></i>
            </div>
          </div>
          <div className={classes.content}>
            <h5>Payment Success !</h5>
            <Link to="/">
              <a>Go to Home</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
