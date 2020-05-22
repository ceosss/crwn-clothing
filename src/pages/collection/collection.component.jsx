import React from "react";

import CollectionItem from "../../components/Collection-item/Collection-item.component";

import { getSpecificCat } from "./../../redux/shop/shop.utils.js";
import { connect } from "react-redux";


import {
  CollectionPageContainer,
  CollectionItemsContainer,
  TitleContainer,
} from "./collection.styles";
// import "./collection.styles.scss";

const Collection = (props) => {
  const { title, items } = props.collections;

  return (
    <CollectionPageContainer>
      <TitleContainer>{title.toUpperCase()}</TitleContainer>

      <CollectionItemsContainer>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItemsContainer>
    </CollectionPageContainer>
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
