import React, { Component } from "react";
import SHOP_DATA from "./ShopPage.data";
import CollectionPreview from "../../components/collection-preview/Collection-preview.component";

import "./ShopPage.styles.scss";

class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    return (
      <div className="shop-page">
        {this.state.collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
