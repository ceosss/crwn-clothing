import React from "react";

import { withRouter } from "react-router-dom";
import CollectionItem from "../Collection-item/Collection-item.component";

import "./Collection-preview.styles.scss";

const PreviewCollection = ({ title, items, routeName, history }) => {
  const handleClick = () => {
    history.push(`/shop/${routeName}`);
  };

  return (
    <div className="collection-preview">
      <h1 className="title" onClick={handleClick}>
        {title.toUpperCase()}
      </h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default withRouter(PreviewCollection);
