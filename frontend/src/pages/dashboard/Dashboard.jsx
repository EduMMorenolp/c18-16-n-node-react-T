import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import Tabs from "../../components/Tabs";
import MainContent from "../../components/MainContest";

const Dashboard = () => {
  const [userType, setUserType] = useState("");

  const handleUserChange = (selectedUser) => {
    setUserType(selectedUser);
  };

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-grow-1">
        {/* Header */}
        <Header onUserChange={handleUserChange} />

        {/* Tabs */}
        <Tabs />

        {/* Content */}
        <MainContent userType={userType} />
      </div>
    </div>
  );
};

export default Dashboard;
