import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Header from "./components/header/Header.component";
import Homepage from "./pages/homepage/Homepage.component";
import ShopPage from "./pages/shoppage/ShopPage.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Checkout from "./pages/checkout/checkout.component";
import { inArrayFormat } from "./redux/shop/shop.utils";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";

import "./App.css";

const App = ({ setCurrentUser, currentUser }) => {
  // const unsubscribeFromAuth = null;

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      setCurrentUser(userAuth);
      // SetCollections("collections", collectionsArray);

      return () => unsubscribeFromAuth();
    });
  }, [setCurrentUser]);

  // componentDidMount() {

  //   const { setCurrentUser } = this.props;
  //   this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
  //     if (userAuth) {
  //       const userRef = await createUserProfileDocument(userAuth);

  //       userRef.onSnapshot((snapShot) => {
  //         setCurrentUser({
  //           id: snapShot.id,
  //           ...snapShot.data(),
  //         });
  //       });
  //     }
  //     setCurrentUser(userAuth);
  //     // SetCollections("collections", collectionsArray);
  //   });

  // }

  // componentWillUnmount() {
  //   this.unsubscribeFromAuth();
  // }
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
        <Route
          exact
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
          }
        />
        <Route exact to="/checkout" component={Checkout} />
      </Switch>
    </div>
  );
};

const mapStateToProps = ({ user, shop }) => ({
  currentUser: user.currentUser,
  collectionsArray: inArrayFormat(shop.collections),
});

const mapDispatchToPorps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToPorps)(App);
