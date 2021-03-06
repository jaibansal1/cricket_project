import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Authentication Pages
import SignIn from "./Components/AuthStack/SignIn";
import Register from "./Components/AuthStack/Register";
import Reset from "./Components/AuthStack/Reset";

//User Pages
import AdminDashboard from "./Components/UserStack/AdminDashboard/AdminDashboard";
import EventCalendar from "./Components/UserStack/EventCalendar/EventCalendar";
import UserDashboard from "./Components/UserStack/UserDashboard/UserDashboard";
import UserProfile from "./Components/UserStack/UserProfile/UserProfile";
import EditProfile from "./Components/UserStack/UserDashboard/EditProfile";

import EditStats from "./Components/UserStack/UserProfile/EditStats";

import PlayerProfile from "./Components/UserStack/UserProfile/PlayerProfile";

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/reset" component={Reset} />
          <Route exact path="/userProfile" component={UserProfile} />
          <Route exact path="/userDashboard" component={UserDashboard} />
          <Route exact path="/adminDashboard" component={AdminDashboard} />
          <Route exact path="/eventCalendar" component={EventCalendar} />
          <Route exact path="/editProfile" component={EditProfile} />

          <Route exact path="/editStats" component={EditStats} />

          <Route exact path="/viewProfile/:uid" component={PlayerProfile} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
