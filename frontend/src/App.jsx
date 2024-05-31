import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import './App.css'
import AppLayout from "./layouts/AppLayout";
import AuthLayout from "./layouts/AuthLayout";
import Register from "./pages/register/Register";
import Login from "./pages/register/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import Error from "./components/Error";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redireccionar la raíz a login si no hay token */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Rutas no autenticadas envueltas en AuthLayout */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* Rutas autenticadas envueltas en AppLayout */}
        <Route element={<AppLayout />}>
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Route>

        {/* Ruta para manejar páginas no encontradas */}
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
