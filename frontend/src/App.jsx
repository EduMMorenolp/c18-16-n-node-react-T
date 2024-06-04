import { BrowserRouter, Routes, Route } from "react-router-dom";
// import './App.css'
import AppLayout from "./layouts/AppLayout";
import AuthLayout from "./layouts/AuthLayout";
import Register from "./pages/register/Register";
import Login from "./pages/register/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import ProtectedRoute from './components/ProtectedRoute';
import HomePage from "./pages/home/HomePage";
import Notifications from "./pages/notifications/Notifications";
import Users from "./pages/users/Users";
import UserUpdate from "./pages/users/UserUpdatePage";
import UserDetail from "./pages/userDetail/UserDetail";
import Students from "./pages/students/Students";
import Teachers from "./pages/teachers/Teachers";
import LoginPage from "./pages/auth/LoginPage";
import SettingPage from "./pages/setting/SettingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index path="/" element={<HomePage />}/>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {/* Users */}
          <Route path="/users" element={<Users/>}/>
          <Route path="/users/:userId/edit" element={<UserUpdate/>}/>
          <Route path="/user-detail/:userId" element={<UserDetail/>} />
          {/* Students */}
          <Route path="/students" element={<Students/>}/> 
          {/* Teachers */}
          <Route path="/teachers" element={<Teachers/>}/>
          {/* Notifications */}
          <Route path="/notifications" element={<Notifications />} />
          {/* Setting */}
          <Route path="setting" element={<SettingPage/>}/>

        </Route>
        <Route element={<AuthLayout />}>
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path='/auth/login' element={<LoginPage />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
