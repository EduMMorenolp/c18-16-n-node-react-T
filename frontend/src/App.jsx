import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import './App.css'
import AppLayout from './layouts/AppLayout'
import AuthLayout from "./layouts/AuthLayout"
import Register from './pages/register/Register'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path='/admin/register' element={<Register />} index/>
        </Route>

        <Route element={<AuthLayout />}>

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
