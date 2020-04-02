import React from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "./pages/Homepage";
import GifDetails from "./pages/Details";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/:details" component={GifDetails} />
      </Switch>
    </div>
  );
}

export default App;
