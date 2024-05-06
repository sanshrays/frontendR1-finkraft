import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AgGridReact } from "ag-grid-react"; 
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

const Dashboard = () => {
    const navigate = useNavigate();
  const [rowData, setRowData] = useState([
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  ]);

  const [colDefs, setColDefs] = useState([
    { field: "make" },
    { field: "model" },
    { field: "price" },
    { field: "electric" },
  ]);

  const handleLogout = () => {
    navigate("/")
  }

  return (
    <div>
      <div style={{ textAlign: "right", padding: "10px" }}>
        {/* Logout Link */}
        <Link to="/" onClick={handleLogout}>
          Logout
        </Link>
      </div>
      <h1>WELCOME TO DASHBOARD</h1>
      <div
        className="ag-theme-quartz" 
        style={{ height: 500 }} 
      >
        <AgGridReact rowData={rowData} columnDefs={colDefs} />
      </div>
    </div>
  );
};

export default Dashboard;
