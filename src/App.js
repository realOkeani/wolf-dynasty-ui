import React, { Component } from 'react';
import './App.css';
import RegistrationForm from "./RegistrationForm";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './league_rules.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Login from './LoginPage';
import freeAgentsTable from "./freeAgentsTable";


// const checkAuth = () => {
//   const token = localStorage.getItem('token');
//   const refreshToken = localStorage.getItem('refreshToken');
//
//   if (!token || !refreshToken) {
//       return false;
//   }
//
//   try {
//       const { exp } = decode(refreshToken);
//
//       if (exp < new Date().getTime() / 1000) {
//           return false
//       }
//   } catch (e) {
//       return false;
//   }
//
//   return true;
// };

// function AuthRoute({ component: Component, ...rest }) {
//     return (
//         <Route
//             {...rest}
//             render={props =>
//                 checkAuth() ? (
//                     <Component {...props} />
//                 ) : (
//                     <Redirect
//                         to={{
//                             pathname: "/login",
//                         }}
//                     />
//                 )
//             }
//         />
//     );
// }

class App extends Component {



  render() {
    return (
        <MuiThemeProvider>
            <BrowserRouter>
                <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/registration" component={RegistrationForm} />
                {/*<AuthRoute exact path="/auth" component={Auth} />*/}
                <Route exact path="/free-agents" component={freeAgentsTable} />
                </Switch>
            </BrowserRouter>
        </MuiThemeProvider>
    );
  }
}

export default App;
