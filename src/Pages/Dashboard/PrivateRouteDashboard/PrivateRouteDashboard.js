import React from "react";
import { Redirect, Route } from "react-router";
import useAuth from "../../../Hooks/useAuth";
import useLoader from "../../../Hooks/useLoader";

const PrivateRouteDashboard = ({ children, ...rest }) => {
  // Private Route Set up
  const loader = useLoader();
  const { user, isLoading, admin } = useAuth();
  if (isLoading) {
    return loader;
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        admin ? (
          children
        ) : (
          <Redirect to={{ pathname: "/home", state: { from: location } }} />
        )
      }
    ></Route>
  );
};

export default PrivateRouteDashboard;
