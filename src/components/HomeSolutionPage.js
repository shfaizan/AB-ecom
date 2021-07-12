import React, { Component } from "react";
import classes from "./Homesolution.module.css";
import IAQaudit from "./solutions/IAQ-Audit/IAQaudit";
import Header from "./solutions/Header/HeaderContent";

class SolutionPage extends Component {
  render() {
    return (
      <div className={classes.background}>
        <Header />
        <IAQaudit />
      </div>
    );
  }
}
export default SolutionPage;
