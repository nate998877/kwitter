import React, { Component } from "react"
import { Switch, Route } from "react-router-dom";
import { LoginPage, UserProfile, NewsFeedPage } from "./Pages";
// import { fetchCurrentMessages } from "./PageComponents/ScrollPageComponents/ChitFeed.js";
import ChitFeed from "./PageComponents/ScrollPageComponents/ChitFeed";

class App extends Component {
  render() {
    // fetchCurrentMessages();
    return (
      <Switch>
        <Route exact path="/" render={() => <LoginPage />} />
        <Route exact path="/profile" render={() => <UserProfile />} />
        <Route exact path="/newsfeed" render={() => <NewsFeedPage />} />
        <Route exact path="/chit" render={() => <ChitFeed />} />
      </Switch>
    );
  }
}

export default App;
