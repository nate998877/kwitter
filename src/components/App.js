
import { Switch, Route } from "react-router-dom";
import NewsFeedPage from "./NewsFeedPage"; 
import { LoginForm, UserProfile, NewUserForm } from ".";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <LoginForm />} />
        <Route exact path="/profile" render={() => <UserProfile />} />
        <Route exact path="/newuser" render={() => <NewUserForm />} />
        <Route exact path="/newsfeed" render={() => <NewsFeedPage/>} />
      </Switch>
    );
  }
}

export default App;
