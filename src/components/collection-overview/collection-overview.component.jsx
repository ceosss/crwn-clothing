import React from "react";

import { connect } from "react-redux";

import CollectionPreview from "./../../components/collection-preview/Collection-preview.component";
import { inArrayFormat } from "./../../redux/shop/shop.utils.js";

import "./collection-overview.styles.scss";

const CollectionOverview = ({ collections }) => {
  return (
    <div className="collection-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = ({ shop: { collections } }) => {
  return {
    collections: inArrayFormat(collections),
  };
};

export default connect(mapStateToProps)(CollectionOverview);
