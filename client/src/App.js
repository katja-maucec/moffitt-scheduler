import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import StaticCalendar from "./components/Calendar/StaticCalendar";
import SleAvailability from "./components/Sle/SleAvailability";
import SleYourShifts from "./components/Sle/SleYourShifts";
import SupervisorEmployees from "./components/Supervisor/SupervisorEmployees";
import SupervisorCover from "./components/Supervisor/SupervisorCover";
import Cover from "./components/Cover/Cover";
import MasterSchedule from "./components/Supervisor/SupervisorMS";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/staticCalendar" component={StaticCalendar} />
          <Route exact path="/yourshifts" component={SleYourShifts} />
          <Route exact path="/calendar/:userId" component={SleAvailability} />
          <Route exact path="/employees" component={SupervisorEmployees} />
          <Route exact path="/cover" component={SupervisorCover} />
          <Route exact path="/masterschedule" component={MasterSchedule} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
