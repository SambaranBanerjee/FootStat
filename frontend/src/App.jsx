import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

import Home from "./pages/Home";
// import Login from "./pages/Auth/Login";
// import Signup from "./pages/Auth/Signup";
// import Players from "./pages/Players/PlayerList";

const App = () => {
  /**
   * TEMPORARY STATE
   * Later this will come from AuthContext
   * Example:
   * const { isAuthenticated, loading } = useAuth();
   */
  const isAuthenticated = false;
  const loading = false;

  if (loading) {
    // Optional: show loader during auth check
    // return <Loader />;
  }

  return (
    <BrowserRouter>
      {/* Navbar is global */}
      <Navbar isAuthenticated={isAuthenticated} />

      {/* Main Content */}
      <Routes>
        <Route path="/" element={<Home />} />

        {/*
        Future routes
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/players" element={<Players />} />
        */}
      </Routes>

      {/* Footer is global */}
      <Footer />
    </BrowserRouter>
  );
};

export default App;
