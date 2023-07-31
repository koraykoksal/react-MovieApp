import React from "react";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import AppRouter from "./router/AppRouter";

const App = () => {
  return (
    <div className="dark:gray-dark-main min-h-screen">
      

      <AppRouter/>

    </div>
  );
};

export default App;
