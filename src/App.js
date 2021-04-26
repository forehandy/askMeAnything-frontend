import React from "react";
import "./App.css"
import Login from "./components/login";
import signUp from "./components/sign-up";
import Nav from "./components/Nav";
import Home from "./components/Home";
import ask from "./components/ask";
import Answer from "./components/answer";
import Navfooter from "./components/Navfooter";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
      <div className="page-container">
        <div className="content-wrap">

          <Router>
            <div >
              <Nav />

              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/Ask" component={ask} />
                <Route path="/Answer" component={Answer} />
                <Route path="/Login" component={Login} />
                <Route path="/signUp" component={signUp} />
              </Switch>

            </div>

          </Router>

        </div>
        <Navfooter />
      </div>



  );
}



export default App;
