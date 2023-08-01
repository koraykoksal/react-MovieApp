import React from "react";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import AppRouter from "./router/AppRouter";
import { AuthContextProvider } from "./context/AuthContext";
import { DataContextPrivoder } from "./context/DataContext";

const App = () => {
  return (
    <div className="dark:gray-dark-main min-h-screen">
      
<AuthContextProvider>
  <DataContextPrivoder>
  <AppRouter/>
  </DataContextPrivoder>
</AuthContextProvider>
     

    </div>
  );
};

export default App;
