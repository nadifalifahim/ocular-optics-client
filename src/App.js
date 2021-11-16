import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./Context/AuthProvider";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";
import Register from "./Pages/Register/Register";

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/register">
              <Register></Register>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute exact path="/about">
              <Home></Home>
            </PrivateRoute>
            <Route exact path="*">
              <PageNotFound></PageNotFound>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
