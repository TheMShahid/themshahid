import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navabar from "./components/Navbar/Navbar";
import HomePage from "./pages/Home/HomePage";
import GlobalStyle from "./globalStyles";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navabar />
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
