import React from "react";

// import { withRouter } from "react-router-dom";

import Directory from "../../components/directory/Directory.component";

import "./Homepage.styles.scss";

const Homepage = (props) => {
  return (
    <div className="homepage">
      <Directory />
    </div>
  );
};

export default Homepage;
