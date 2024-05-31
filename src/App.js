import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Dashboard from "./Dashboard";
import FarmersPage from "./FarmersPage";
import SideMenu from "./components/SideMenu";
import SignIn from "./SignIn";
// Import other pages when created
// import VeterinariansPage from './VeterinariansPage';
// import CasesPage from './CasesPage';
// import AlertsPage from './AlertsPage';
// import LearnPage from './LearnPage';
// import UserManagementPage from './UserManagementPage';

const App = () => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  const isSignInPage = location.pathname === "/signin";

  return (
    <div className="min-h-screen flex">
      {/* Conditionally render the sidebar */}
      {!isSignInPage && (
        <SideMenu
          isSidebarExpanded={isSidebarExpanded}
          toggleSidebar={toggleSidebar}
        />
      )}

      {/* Main Content */}
      <div
        className={`flex-1 p-6 bg-slate-200 ${isSignInPage ? "w-full" : ""}`}
      >
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/farmers" element={<FarmersPage />} />
          <Route
            path="/veterinarians"
            element={<div>Veterinarians Page</div>}
          />
          <Route path="/cases" element={<div>Cases Page</div>} />
          <Route path="/alerts" element={<div>Alerts Page</div>} />
          <Route path="/learn" element={<div>Learn Page</div>} />
          <Route path="/signin" element={<SignIn />} />
          <Route
            path="/user-management"
            element={<div>User Management Page</div>}
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
