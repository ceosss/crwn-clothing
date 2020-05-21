import React from "react";

import { withRouter } from "react-router-dom";

// import "./Menu-item.styles.scss";
import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle,
} from "./Menu-item.styles";

const MenuItem = ({ title, imageUrl, size, linkUrl, history }) => {
  const handleClick = () => {
    history.push(`/${linkUrl}`);
  };

  return (
    <MenuItemContainer size={size} onClick={handleClick}>
      <BackgroundImageContainer imageUrl={imageUrl} />
      <ContentContainer>
        <ContentTitle>{title.toUpperCase()}</ContentTitle>
        <ContentSubtitle>SHOP NOW</ContentSubtitle>
      </ContentContainer>
    </MenuItemContainer>
  );
};

export default withRouter(MenuItem);
