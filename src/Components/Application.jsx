import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { createContext, useContext, useEffect, useState } from "react";

import SignIn from "./Authentication/SignIn";
import SignUp from "./Authentication/SignUp";
import UserProfile from "./UserProfile/UserProfile";
import AdminDashboard from "./AdminDashboard/AdminDashboard";
import UserDashboard from "./UserDashboard/UserDashboard";
import EventCalendar from "./EventCalendar/EventCalendar";
import { useAuth, auth } from "../Providers/AuthProvider";
import { createBrowserHistory, createHashHistory } from "history";
import { app, db } from "../Services/firebase";

function Application() {
  const [loading, setLoading] = useState(true);
  // const { user } = useAuth();
  const user = true;
  // const history = createHashHistory();

  // NOT SURE IF THIS IS REQUIRED
  // useEffect(() => {
  //   const usersRef = db.collection("users");
  //   const unsubscribe = onAuthStateChanged(auth, (newUser) => {
  //     if (newUser) {
  //       usersRef
  //         .doc(newUser.uid)
  //         .get()
  //         .then((document) => {
  //           const userData = document.data();
  //           setLoading(false);
  //           setUser(userData);
  //         })
  //         .catch((error) => {
  //           setLoading(false);
  //         });
  //     } else {
  //       setUser(null);
  //       setLoading(false);
  //     }
  //   });
  // }, []);

  // if (loading) {
  //   return <></>;
  // }
  return user ? (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/userProfile" />
        </Route>
        <Route exact path="/userProfile">
          <UserProfile />
        </Route>
        <Route exact path="/userDashboard">
          <UserDashboard />
        </Route>
        <Route exact path="/adminDashboard">
          <AdminDashboard />
        </Route>
        <Route exact path="/eventCalendar">
          <EventCalendar />
        </Route>
      </Switch>
    </Router>
  ) : (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/signIn" />
        </Route>
        <Route exact path="/signUp">
          <SignUp />
        </Route>
        <Route exact path="/signIn">
          <SignIn />
        </Route>
      </Switch>
    </Router>
  );
}

export default Application;
