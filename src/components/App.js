
import { Switch, Route } from "react-router-dom";
import { LoginForm, UserProfile, NewUserForm } from ".";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <LoginForm />} />
        <Route exact path="/profile" render={() => <UserProfile />} />
        <Route exact path="/newuser" render={() => <NewUserForm />} />
      </Switch>
    );
  }
}

export default App;
