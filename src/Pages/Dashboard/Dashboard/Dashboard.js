import React from "react";
import useTitle from "../../../Hooks/useTitle";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import AddNewProduct from "../AddNewProduct/AddNewProduct";
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
            <AddNewProduct></AddNewProduct>
          </div>
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
