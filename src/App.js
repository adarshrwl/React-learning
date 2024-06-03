import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminUpdateProduct from "./pages/admin/AdminUpdateProduct";

function App() {
  return (
    <Router>
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />


        {/* Admin Routes */}
        <Route path="/admin/dashboard" element={<AdminDashboard/>}/>
        <Route path="/admin/update/:id" element={<AdminUpdateProduct />}/>
      </Routes>
    </Router>
  );
}

export default App;
