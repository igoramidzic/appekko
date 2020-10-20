import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import HomePage from './pages/home/home-page';
import LoginPage from './pages/login/login-page';
import RegisterPage from './pages/register/register-page';
import mixpanel from 'mixpanel-browser'
import { FirebaseContext } from './context/firebase';
import { ROUTES } from './constants/routes';

function App() {

  const firebase = useContext(FirebaseContext);

  if (process.env["MIXPANEL_KEY"]) {
    mixpanel.init(process.env["MIXPANEL_KEY"] || '');
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/login" render={(props) => {
          if (!!firebase.auth?.currentUser)
            return <Redirect to={ROUTES.HOME}></Redirect>
          else
            return <LoginPage></LoginPage>
        }}></Route>
        <Route exact path="/register" component={RegisterPage}></Route>
        <Route exact path="/" component={HomePage}></Route>
      </Switch>
    </Router>
  );
}

export default App;
