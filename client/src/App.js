import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Login from "./components/Login";
import "./styles.scss";
import PrivateRoute from "./components/PrivateRoute";
import BubblePage from "./components/BubblePage";

function App() {

  //console.log(props)
  return (
    <Router>
      <div className="App">
        
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}

        <Link to="/">Home</Link>
        
        <Switch>
          <PrivateRoute path="/protected">
            <BubblePage  />
          </PrivateRoute>
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
