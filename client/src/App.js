import React, { useEffect, lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Header from "./components/header/Header.component";
// import Homepage from "./pages/homepage/Homepage.component";

// import ShopPage from "./pages/shoppage/ShopPage.component";
// import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
// import Checkout from "./pages/checkout/checkout.component";
import { inArrayFormat } from "./redux/shop/shop.utils";
import Spinner from "./components/spinner/spinner.component";
import ErrorBoundary from "./components/error-boundary/error-boundary.component";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";

import { GlobalStyles } from "./global.styles";

const Homepage = lazy(() => import("./pages/homepage/Homepage.component"));
const ShopPage = lazy(() => import("./pages/shoppage/ShopPage.component"));
const Checkout = lazy(() => import("./pages/checkout/checkout.component"));
const SignInAndSignUpPage = lazy(() =>
  import("./pages/sign-in-and-sign-up/sign-in-and-sign-up.component")
);

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

  return (
    <div>
      <GlobalStyles />
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path="/" component={Homepage} />
            <Route path="/shop" component={ShopPage} />
            <Route exact path="/checkout" component={Checkout} />
            <Route
              exact
              path="/signin"
              render={() =>
                currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
              }
            />
          </Suspense>
        </ErrorBoundary>
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
