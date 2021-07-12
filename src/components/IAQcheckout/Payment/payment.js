import React, { useState, useEffect } from "react";
import axios from "axios";
function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

const Payment = ({
  nextStep,
  values: {
    firstNae,
    surName,
    email,
    phoneNumber,
    appartment,
    address,
    product
  }
}) => {
  const [fullName, setFullName] = useState(firstName);
  const [lastName, setLastName] = useState(surName);
  const [description, setDescription] = useState(product);
  const [appartmentNo, setAppartmentNo] = useState(appartment);
  const [shipaddress, setShipAddress] = useState(address);
  const [phnumber, setPhNumber] = useState(phoneNumber);

  useEffect(() => {
    displayRazorpay();
  }, []);

  async function displayRazorpay(e) {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const data = await fetch("https://shopapi.activebuildings.in/razorpay", {
      method: "POST"
    }).then((t) => t.json());

    console.log(data);

    const options = {
      key: process.env.REACT_APP_API_KEY,
      currency: "INR",
      amount: data.amount.toString(),
      order_id: data.id,
      name: "active buildings payment",
      description: description,
      notes: {
        FirstName: fullName,
        lastName: lastName,
        PhoneNumber: phnumber,
        email: email,
        HouseNo: appartmentNo,
        shippingAddress: shipaddress
      },
      handler: async function (response) {
        //alert(response.razorpay_payment_id);
        // alert(response.razorpay_order_id)
        //alert(response.razorpay_signature)
        //  nextStep();
        try {
          const paymentId = response.razorpay_payment_id;
          const url = `https://shopapi.activebuildings.in/capture/${paymentId}`;
          const captureResponse = await axios.post(url, {});
          const successObj = JSON.parse(captureResponse.data);
          const captured = successObj.captured;
          const { notes, order_id, status, id, amount } = successObj;
          const transactionID = id;
          const orderID = order_id;
          const firstName = notes.FirstName;
          const lastName = notes.lastName;
          const address = notes.shippingAddress;
          const mailID = notes.email;
          const price = (amount / 100).toString();
          const orderStatus = status;
          console.log("App -> razorPayPaymentHandler -> captured", successObj);

          if (captured) {
            console.log("success");
            // console.log(notes, order_id, status, id);
            const paymentInfo = {
              transactionID,
              orderID,
              firstName,
              lastName,
              address,
              mailID,
              price,
              orderStatus
            };
            axios
              .post("https://shopapi.activebuildings.in/add-info", paymentInfo)
              .then((res) => {
                console.log("data entered", res);
                nextStep();
              })
              .catch((err) => {
                console.log(err);
              });
          }
        } catch (err) {
          alert(err);
        }
      },

      prefill: {
        contact: phnumber,
        email: email
      }
      /*
          readonly:{
            contact:true,email:true
          }
          */
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.on("payment.failed", function (response) {
      // alert(response.error.code);
      alert("Payment failed! Please Try again!");
      //console.log(response);
      //history.push('/failure');
    });
    paymentObject.open();
  }

  return <div></div>;
};

export default Payment;
