import { useState } from 'react';
import IAQFormUserDetails from '../form/IAQFormUserDetails';
import Payment from '../Payment/payment';
import Confirm from '../confirm/Confirm';
import Success from '../success/Success';

const UserForm = (props) => {
  let [step, setStep] = useState(1);
  const [userDetails, setUserDetails] = useState({
    firstName: '',
    surName: '',
    email: '',
    phoneNumber: '',
    appartment: '',
    product: 'One time IAQ evaluation for your home (1BHK/2BHK/3BHK)',
    price: 1299,
  });
  //console.log(props);
  const [address, setaddress] = useState('');
  // Proceed to next step
  const nextStep = () => {
    setStep(++step);
  };

  // Go back to prev step
  const prevStep = () => {
    setStep(--step);
  };

  const handleChange = (input) => (e) => {
    setUserDetails({
      ...userDetails,
      [input]: e.target.value,
    });
  };
  const getUserIP = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log(position.coords.longitude);
      console.log(position.coords.latitude);
      fetch(
        `https://api.opencagedata.com/geocode/v1/json?q=${position.coords.latitude}+${position.coords.longitude}&key=5855a5fc84a44e0da5075e7e888d317d`,
      )
        .then((response) => response.json())
        .then((res) => {
          console.log(res.results[0].formatted);
          setaddress(res.results[0].formatted);
        });
    });
  };
  const getUserLocation = (e) => {
    setaddress(e.target.value);
  };
  const {
    firstName,
    surName,
    email,
    phoneNumber,
    appartment,
    product,
    price,
    image,
  } = userDetails;
  const values = {
    firstName,
    surName,
    email,
    phoneNumber,
    appartment,
    address,
    product,
    price,
    image,
  };

  switch (step) {
    case 1:
      return (
        <IAQFormUserDetails
          nextStep={nextStep}
          handleChange={handleChange}
          getUserIP={getUserIP}
          getUserLocation={getUserLocation}
          values={values}
        />
      );
    case 2:
      return (
        <Confirm nextStep={nextStep} prevStep={prevStep} values={values} />
      );
    case 3:
      return <Payment nextStep={nextStep} values={values} />;

    case 4:
      return <Success />;

    default:
      break;
  }
};

export default UserForm;
