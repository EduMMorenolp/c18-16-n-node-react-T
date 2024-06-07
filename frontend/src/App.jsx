import { BrowserRouter, Routes, Route } from "react-router-dom";
// import './App.css'
import AppLayout from "./layouts/AppLayout";
import AuthLayout from "./layouts/AuthLayout";
// import Dashboard from "./pages/dashboard/Dashboard";
// import ProtectedRoute from './components/ProtectedRoute';
import HomePage from "./pages/home/HomePage";
import Notifications from "./pages/notifications/Notifications";
import LoginPage from "./pages/auth/LoginPage";
import SettingPage from "./pages/setting/SettingPage";
import RegisterPage from "./pages/auth/RegisterPage";
import ForgotPasswordPage from "./pages/auth/ForgotPasswordPage";
import NotFound from "./pages/404/NotFound";
import ProtectedRoute from "./routing/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoute><AppLayout /></ProtectedRoute>}>
          <Route index path="/" element={<HomePage />}/>
          <Route path="/notifications" element={<Notifications />} />
          <Route path="setting" element={<SettingPage/>}/>
        </Route>
        
        <Route element={<AuthLayout />}>
          {/* <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          /> */}
          <Route path='/auth/login' element={<LoginPage />} />
          <Route path='/auth/register' element={<RegisterPage />} />
          <Route path='/auth/forgot-password' element={<ForgotPasswordPage />} />
        </Route>
        <Route path='*' element={<NotFound />}  />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
