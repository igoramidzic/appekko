import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import HomePage from './pages/home/home-page';
import LoginPage from './pages/login/login-page';
import RegisterPage from './pages/register/register-page';
import mixpanel from 'mixpanel-browser'

function App() {

  if (process.env["MIXPANEL_KEY"]) {
    mixpanel.init(process.env["MIXPANEL_KEY"] || '');
  }

  return (
    <Router>
      {/* <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
        </ul>
      </nav> */}
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/register">
          <RegisterPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
