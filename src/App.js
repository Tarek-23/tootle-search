import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.js";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          {/* Home */}
          <Route exact path="/">
            <Home />
          </Route>

          {/* Search */}
          <Route path="/search">
            <h1>Search page</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
