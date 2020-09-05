import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Project from "./Project";
function Routes() {
  return (
    <div>
      <Switch>
        <Route path="/" exact render={() => <Home />} />
        <Route path="/project/:id" render={(props) => <Project {...props} />} />
      </Switch>
    </div>
  );
}

export default Routes;
