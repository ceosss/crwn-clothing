import React from "react";
import Homepage from "./pages/homepage/Homepage.component";
import ShopPage from "./pages/shoppage/ShopPage.component";
import { Switch, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
