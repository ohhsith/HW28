import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Appointments from "./views/Appointments";
import Events from "./views/Events";
import Doctors from "./views/Doctors";
import Clients from "./views/Clients";
import Home from "./views/Home";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/appointments">
            <Appointments />
          </Route>
          <Route path="/events">
            <Events />
          </Route>
          <Route path="/doctors">
            <Doctors />
          </Route>
          <Route path="/clients">
            <Clients />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
