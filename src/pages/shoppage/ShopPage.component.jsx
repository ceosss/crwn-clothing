import React from "react";

import { Route } from "react-router-dom";
import { connect } from "react-redux";

import { updateCollections } from "./../../redux/shop/shop.actions";

import CollectionOverview from "./../../components/collection-overview/collection-overview.component";
import Collection from "./../collection/collection.component";

import WithSpinner from "./../../components/with-spinner/with-spinner.component";

import {
  firestore,
  convertCollectionsSnapshopToMap,
} from "./../../firebase/firebase.utils";

// import "./ShopPage.styles.scss";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionWithSpinner = WithSpinner(Collection);

class ShopPage extends React.Component {
  state = {
    loading: true,
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");

    collectionRef.onSnapshot(async (snapshot) => {
      const transformedCollection = convertCollectionsSnapshopToMap(
        snapshot.docs
      );
      updateCollections(transformedCollection);
      this.setState({ loading: false });
    });
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

const MapDispatchToProps = (dispatch) => {
  return {
    updateCollections: (collection) => dispatch(updateCollections(collection)),
  };
};

export default connect(null, MapDispatchToProps)(ShopPage);
