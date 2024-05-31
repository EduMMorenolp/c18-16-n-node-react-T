import React from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import Tabs from "../../components/Tabs";
import MainContent from "../../components/MainContest";

const Dashboard = () => {
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-grow-1">
        {/* Header */}
        <Header />

        {/* Tabs */}
        <Tabs />

        {/* Content */}
        <MainContent />
      </div>
    </div>
  );
};

export default Dashboard;
