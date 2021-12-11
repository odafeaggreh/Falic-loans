import Signup from "./components/pages/Signup";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Signin from "./components/pages/Signin";
import ForgotPass from "./components/pages/ForgotPass";
import { AuthProvider } from "./contexts/AuthContext";
import Dashboard from "./components/pages/Dashboard";
import PrivateRoute from "./PrivateRoute";
import Withdraw from "./components/pages/Withdraw";
import Loans from "./components/pages/Loans";
import Profile from "./components/pages/profile";
import UpdateProfile from "./components/pages/UpdateProfile";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path="/" component={Dashboard} />
            <PrivateRoute exact path="/withdraw" component={Withdraw} />
            <PrivateRoute exact path="/loan" component={Loans} />
            <PrivateRoute exact path="/profile" component={Profile} />
            <PrivateRoute
              exact
              path="/updateDetailes"
              component={UpdateProfile}
            />

            <Route path="/signin" component={Signin} />
            <Route path="/signup" component={Signup} />
            <Route path="/forgotPassword" component={ForgotPass} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
