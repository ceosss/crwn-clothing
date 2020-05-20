import React from "react";

import CollectionItem from "../../components/Collection-item/Collection-item.component";

import { getSpecificCat } from "./../../redux/shop/shop.utils.js";
import { connect } from "react-redux";

import "./collection.styles.scss";

const Collection = ({ collections }) => {
  const { title, items } = collections;

  return (
    <div className="collection-page">
      <div>
        <h1 className="title">{title.toUpperCase()}</h1>
      </div>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    collections: getSpecificCat(
      state.shop.collections,
      ownProps.match.params.collectionId
    ),
  };
};

export default connect(mapStateToProps)(Collection);
