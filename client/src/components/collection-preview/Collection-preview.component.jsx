import React from "react";

import { withRouter } from "react-router-dom";
import CollectionItem from "../Collection-item/Collection-item.component";

// import "./Collection-preview.styles.scss";
import {
  CollectionPreviewContainer,
  CollectionTitleContainer,
  PreviewContainer,
} from "./Collection-preview.styles";

const PreviewCollection = ({ title, items, routeName, history }) => {
  const handleClick = () => {
    history.push(`/shop/${routeName}`);
  };

  return (
    <CollectionPreviewContainer>
      <CollectionTitleContainer onClick={handleClick}>
        {title.toUpperCase()}
      </CollectionTitleContainer>
      <PreviewContainer>
        {items
          .filter((item, index) => index < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </PreviewContainer>
    </CollectionPreviewContainer>
  );
};

export default withRouter(PreviewCollection);
