import React, { useState, useEffect } from 'react';
import './fontstyle.css';
import classes from './headerContent.module.css';
import ClearMumbai from '../../../assets/clear_mumbai.jpg';
import ModerateMumbai from '../../../assets/moderate_mumbai.jpg';
import UnhealthyMumbai from '../../../assets/unhealthy_mumbai.jpg';
import ClearDelhi from '../../../assets/clear_delhi.jpg';
import ModerateDelhi from '../../../assets/moderate_delhi.jpg';
import UnhealthyDelhi from '../../../assets/unhealthy_delhi.jpg';
import ClearBangalore from '../../../assets/clear_bangalore.jpg';
import ModerateBangalore from '../../../assets/moderate_bangalore.jpg';
import UnhealthyBangalore from '../../../assets/unhealthy_bangalore.jpg';
import axios from 'axios';

function SolutionPage() {
  const [location, setLocation] = useState('');
  const [picUrl, setPicUrl] = useState('');
  const [data, setData] = useState('');
  const [city, setCity] = useState('');

  useEffect(() => {
    if (location === 'Mumbai') {
      setCity('Mumbai');
      axios
        .get(
          `https://api.waqi.info/feed/Mumbai/?token=bc8a6c1e4c9db217ca92923e91473461f507757f`,
        )
        .then((res) => res.data)
        .then((res) => {
          //console.log(res.data);
          setData(res.data.aqi);
          if (res.data.aqi > 101) {
            setPicUrl(UnhealthyMumbai);
          }
          if (res.data.aqi > 50 && res.data.aqi < 100) {
            setPicUrl(ModerateMumbai);
          }
        });
    } else if (location === 'Delhi') {
      setCity('Delhi');
      axios
        .get(
          `https://api.waqi.info/feed/Delhi/?token=bc8a6c1e4c9db217ca92923e91473461f507757f`,
        )
        .then((res) => res.data)
        .then((res) => {
          setData(res.data.aqi);
          if (res.data.aqi > 101) {
            setPicUrl(UnhealthyDelhi);
          }
          if (res.data.aqi > 50 && res.data.aqi < 100) {
            setPicUrl(ModerateDelhi);
          }
        });
    } else {
      setCity('Bangalore');
      axios
        .get(
          `https://api.waqi.info/feed/Bangalore/?token=bc8a6c1e4c9db217ca92923e91473461f507757f`,
        )
        .then((res) => res.data)
        .then((res) => {
          //   console.log(res.data);
          setData(res.data.aqi);
          if (res.data.aqi > 101) {
            setPicUrl(UnhealthyBangalore);
          }
          if (res.data.aqi > 50 && res.data.aqi < 100) {
            setPicUrl(ModerateBangalore);
          }
        });
    }
  }, [location]);

  useEffect(() => {
    getImagebyUserIp();
  }, []);
  const getImagebyUserIp = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log(position.coords.longitude);
      console.log(position.coords.latitude);
      axios
        .get(
          `https://www.airnowapi.org/aq/observation/latLong/current/?format=application/json&latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&distance=30&API_KEY=6F7D7335-20A2-46B2-8C83-85C3A77C25EB`,
        )
        .then((response) => response.data)
        .then((res) => {
          console.log(res);
          //   console.log(res[0].AQI);
          //console.log(res[0].ReportingArea);

          if (res[0] !== undefined) {
            if (res[0].ReportingArea === 'Mumbai') {
              setCity(res[0].ReportingArea);
              if (res[0].AQI > 101) {
                setPicUrl(UnhealthyMumbai);
                setData(res[0].AQI);
              }
              if (res[0].AQI > 50 && res[0].AQI < 100) {
                setPicUrl(ModerateMumbai);
                setData(res[0].AQI);
              }
            }
            if (res[0].ReportingArea === 'Delhi') {
              setCity(res[0].ReportingArea);
              if (res[0].AQI > 101) {
                setPicUrl(UnhealthyDelhi);
                setData(res[0].AQI);
              }
              if (res[0].AQI > 50 && res[0].AQI < 100) {
                setPicUrl(ModerateDelhi);
                setData(res[0].AQI);
              }
            }
            if (res[0].ReportingArea === 'Bangalore') {
              setCity(res[0].ReportingArea);
              if (res[0].AQI > 101) {
                setPicUrl(UnhealthyBangalore);
                setData(res[0].AQI);
              }
              if (res[0].AQI > 50 && res[0].AQI < 100) {
                setPicUrl(ModerateBangalore);
                setData(res[0].AQI);
              }
            }
          }
        });
    });
  };

  return (
    <>
      <div className={classes.headerContent}>
        <div className={classes.headerPic}>
          {picUrl ? (
            <img src={picUrl} alt="" className={classes.headerPicture} />
          ) : null}
        </div>
        <div className={classes.rightBackground}>
          <div className={classes.contentRight}>
            <h1 className={classes.headerOne}>POLLUTION</h1>
            <h1 className={classes.headerTwo}>OUTSIDE</h1>
            <div className={classes.line}></div>
            <div className={classes.headerRight}>
              <div className={classes.headerRight_two}>
                <h1>PM 2.5</h1>
                {data ? <h1 style={{ color: '#279989' }}>{data}</h1> : null}
                {data >= 100 ? (
                  <h1
                    style={{ color: `${data >= 100 ? 'red' : '#ffd700'}` }}
                    className={classes.Moderate}
                  >
                    Bad
                  </h1>
                ) : (
                  <h1
                    style={{ color: `${data >= 100 ? 'red' : '#ffd700'}` }}
                    className={classes.Moderate}
                  >
                    Moderate
                  </h1>
                )}
              </div>
            </div>
            <p className={classes.headerText}>
              PM stands for particulate matter which is found in the air. They
              are extremely small and can be seen under an electron microscope.
              Some particles like dust, soot, dirt, smoke etc. might be
              observable to the naked eyes. PM2.5 is nearly 30 times smaller
              than the hair on your head. Therefore, these are easily inhalable.
              Owing their size, PM2.5 are called fine particles. They can even
              mix in your bloodstream and pose greatest risk to human health.
              Fine Particles are the reason behind reduced visibility in our
              cities.
            </p>
            <p className={classes.textpara}>Select your city</p>
            <div className={classes.buttonLocation}>
              <button
                style={{
                  color: `${city === 'Mumbai' ? 'white' : '#279989'}`,
                  backgroundColor: `${city === 'Mumbai' ? '#279989' : 'white'}`,
                }}
                className={classes.button2}
                onClick={() => {
                  setLocation('Mumbai');
                }}
              >
                Mumbai
              </button>
              <button
                style={{
                  color: `${city === 'Delhi' ? 'white' : '#279989'}`,
                  backgroundColor: `${city === 'Delhi' ? '#279989' : 'white'}`,
                }}
                className={classes.button2}
                onClick={() => {
                  setLocation('Delhi');
                }}
              >
                Delhi
              </button>
              <button
                style={{
                  color: `${city === 'Bangalore' ? 'white' : '#279989'}`,
                  backgroundColor: `${
                    city === 'Bangalore' ? '#279989' : 'white'
                  }`,
                }}
                className={classes.button2}
                onClick={() => {
                  setLocation('Bangalore');
                }}
              >
                Bangalore
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.solutions}>
        <div className={classes.arrow}>
          <i className="fa fa-arrow-down" />
        </div>
        <div className={classes.solnheader}>
          <h1 className={classes.headerThree}>Our</h1>
          <h1 className={classes.headerThree}>Solutions</h1>
          <div className={classes.linetwo}></div>
        </div>
      </div>
    </>
  );
}
export default SolutionPage;
