import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

// Pages
import Home from "./pages/Home";
import PlayerList from "./pages/Players/PlayerList";
// import PlayerProfile from "./pages/Players/PlayerProfile";
// import Login from "./pages/Auth/Login";
// import Signup from "./pages/Auth/Signup";

const App = () => {
  /**
   * TEMPORARY AUTH STATE
   * Later this will come from AuthContext
   */
  const isAuthenticated = false;
  const loading = false;

  // Future: show loader while checking auth
  // if (loading) return <Loader />;

  if (loading) {
    //Later
  }

  return (
    <BrowserRouter>
      {/* Global Navbar */}
      <Navbar isAuthenticated={isAuthenticated} />

      {/* App Routes */}
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Public / Auth Routes */}
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/signup" element={<Signup />} /> */}

        {/* Player Routes */}
        <Route path="/players" element={<PlayerList />} />
        {/* <Route path="/players/:id" element={<PlayerProfile />} /> */}
      </Routes>

      {/* Global Footer */}
      <Footer />
    </BrowserRouter>
  );
};

export default App;
