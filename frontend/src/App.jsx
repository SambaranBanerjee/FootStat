import React from "react";
import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import AppRoutes from "./routes/AppRoutes";
// import Loader from "./components/common/Loader";

const App = () => {
  /**
   * TEMPORARY AUTH STATE
   * Later this will come from AuthContext
   */
  const isAuthenticated = false;
  const loading = false;

  if (loading) return <Loader />;

  return (
    <BrowserRouter>
      <Navbar isAuthenticated={isAuthenticated} />
      <AppRoutes isAuthenticated={isAuthenticated} />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
