import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  Redirect,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import useTitle from "../../../Hooks/useTitle";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import AddNewProduct from "../AddNewProduct/AddNewProduct";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import Sidebar from "../Sidebar/Sidebar";
import "./dashboard.css";

const Dashboard = () => {
  useTitle("Dashboard");
  return (
    <div>
      <div className="dashboard-container">
        <div className="dashboard-sidebar">
          <Sidebar></Sidebar>
        </div>
        <div className="dashboard-content">
          <Navbar></Navbar>
          <div className="dashboard-items">
            <BrowserRouter>
              <Switch>
                <Route>
                  <AddNewProduct></AddNewProduct>
                  <MakeAdmin></MakeAdmin>
                </Route>
              </Switch>
            </BrowserRouter>
            <Footer></Footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
