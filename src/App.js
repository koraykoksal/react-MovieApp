import React from "react";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import AppRouter from "./router/AppRouter";
import { AuthContextProvider } from "./context/AuthContext";
import { DataContextPrivoder } from "./context/DataContext";
import { ToastContainer } from 'react-toastify';


const App = () => {
  return (
    <div className="dark:bg-gray-dark-main min-h-screen">
      
    <AuthContextProvider>
      <DataContextPrivoder>
      <AppRouter/>
      <ToastContainer/>
      </DataContextPrivoder>
    </AuthContextProvider>
     

    </div>
  );
};

export default App;
