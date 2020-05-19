import React from "react";

import { Redirect } from "react-router-dom";

import "./Menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => <Redirect to={`/${linkUrl}`} />}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
