import React from "react";
import { Redirect, Route } from "react-router";
import useAuth from "../../../Hooks/useAuth";
import useLoader from "../../../Hooks/useLoader";

const PrivateRoute = ({ children, ...rest }) => {
  // Private Route Set up
  const loader = useLoader();
  const { user, isLoading } = useAuth();
  if (isLoading) {
    return loader;
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: location } }} />
        )
      }
    ></Route>
  );
};

export default PrivateRoute;
