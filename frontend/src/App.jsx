import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
// import './App.css'
import AppLayout from "./layouts/AppLayout";
import AuthLayout from "./layouts/AuthLayout";
import Register from "./pages/register/Register";
import Login from "./pages/register/Login";
import Dashboard from "./pages/dashboard/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/admin/register" element={<Register />} index />
          <Route path="/login" element={<Login />} index />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
