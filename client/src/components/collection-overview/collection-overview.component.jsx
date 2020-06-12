import React from "react";

import { connect } from "react-redux";

import CollectionPreview from "./../../components/collection-preview/Collection-preview.component";
import { inArrayFormat } from "./../../redux/shop/shop.utils.js";

// import "./collection-overview.styles.scss";
import { CollectionOverviewContainer } from "./collection-overview.styles";

const CollectionOverview = ({ collections }) => {
  return (
    <CollectionOverviewContainer>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </CollectionOverviewContainer>
  );
};

const mapStateToProps = ({ shop: { collections } }) => {
  return {
    collections: inArrayFormat(collections),
  };
};

export default connect(mapStateToProps)(CollectionOverview);
