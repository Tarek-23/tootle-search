import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.js";
import SearchPage from "./pages/SearchPage";

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
            <SearchPage />
          </Route>
          <Route path="/ahmed_roushdy.html" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
