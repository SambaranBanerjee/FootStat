import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import PlayerList from "../pages/Players/PlayerList";
// import PlayerProfile from "../pages/Players/PlayerProfile";
// import Login from "../pages/Auth/Login";
// import Signup from "../pages/Auth/Signup";

//import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />

      {/* Auth Routes */}
      {/* <Route path="/login" element={<Login />} /> */}
      {/* <Route path="/signup" element={<Signup />} /> */}

      {/* Protected Routes */}
      {/*<Route
        path="/players"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <PlayerList />
          </ProtectedRoute>
        }
      />*/}

        

        <Route
            path="/players"
            element={
                <PlayerList />
            }
        />

      {/* <Route
        path="/players/:id"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <PlayerProfile />
          </ProtectedRoute>
        }
      /> */}
    </Routes>
  );
};

export default AppRoutes;
