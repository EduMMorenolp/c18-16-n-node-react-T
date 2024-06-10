import React from 'react'
import { useAuth } from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  const { pathname } = useLocation();
  if (isAuthenticated) return <>{children}</>;
  return <Navigate replace to="/auth/login" state={{ from: pathname }} />;
}
