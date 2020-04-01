import React from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "./Homepage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
