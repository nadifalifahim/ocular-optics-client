import React, { useEffect } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import useTitle from "../../../Hooks/useTitle";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import AddNewProduct from "../AddNewProduct/AddNewProduct";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import ManageAllOrders from "../ManageAllOrders/ManageAllOrders";
import ManageProducts from "../ManageProducts/ManageProducts";
import MyOrders from "../MyOrders/MyOrders";
import Pay from "../Pay/Pay";
import PrivateRouteDashboard from "../PrivateRouteDashboard/PrivateRouteDashboard";
import Review from "../Review/Review";
import Sidebar from "../Sidebar/Sidebar";
import "./dashboard.css";

const Dashboard = () => {
  let { path, url } = useRouteMatch();
  useEffect(() => {
    console.log(path, url);
  }, [path, url]);
  useTitle("Dashboard");
  return (
    <div>
      <div className="dashboard-container">
        <div className="dashboard-sidebar">
          <Sidebar></Sidebar>
        </div>
        <div className="dashboard-content">
          <Navbar></Navbar>
          <div>
            <div className="dashboard-items">
              <Switch>
                <Route exact path={`${path}`}>
                  <MyOrders></MyOrders>
                </Route>
                <Route exact path={`${path}/my-orders`}>
                  <MyOrders></MyOrders>
                </Route>
                <Route exact path={`${path}/review`}>
                  <Review></Review>
                </Route>
                <Route exact path={`${path}/pay`}>
                  <Pay></Pay>
                </Route>
                <PrivateRouteDashboard exact path={`${path}/manage-all-orders`}>
                  <ManageAllOrders></ManageAllOrders>
                </PrivateRouteDashboard>
                <PrivateRouteDashboard exact path={`${path}/manage-products`}>
                  <ManageProducts></ManageProducts>
                </PrivateRouteDashboard>
                <PrivateRouteDashboard path={`${path}/add-new-product`}>
                  <AddNewProduct></AddNewProduct>
                </PrivateRouteDashboard>
                <PrivateRouteDashboard path={`${path}/add-new-admin`}>
                  <MakeAdmin></MakeAdmin>
                </PrivateRouteDashboard>
              </Switch>
            </div>
            <Footer></Footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
