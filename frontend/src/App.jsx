import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import ProtectedRoute from "./routing/ProtectedRoute";
import AuthLayout from "./layouts/AuthLayout";
import HomePage from "./pages/home/HomePage";
import Notifications from "./pages/notifications/Notifications";
import SettingPage from "./pages/setting/SettingPage";

// Auth
import SelectUserTypePage from "./pages/auth/SelectUserTypePage";
import VerificationCodePage from "./pages/auth/VerificationCodePage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import ForgotPasswordPage from "./pages/auth/ForgotPasswordPage";
import NotFound from "./pages/404/NotFound";


// Students
import StudentsPage from "./pages/students/StudentsPage";
import CreateStudentPage from "./pages/students/CreateStudent"

//Parents
import ParentsPage from "./pages/parents/ParentsPage";
import CreateParentPage from "./pages/parents/CreateParentPage";
import UpdateParentPage from "./pages/parents/UpdateParentPage";
import ParentDetailPage from "./pages/parents/ParentDetailPage";
import AddStudentToParent from "./pages/parents/AddStudentToParent";

//Teachers
import TeachesPage from "./pages/teachers/TeachesPage";
import CreateTeacherPage from "./pages/teachers/CreateTeacherPage";
import UpdateTeacherPage from "./pages/teachers/UpdateTeacherPage";
import TeacherDetail from "./pages/teachers/TeacherDetail";




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoute><AppLayout /></ProtectedRoute>}>
          <Route index path="/" element={<HomePage />}/>
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/setting" element={<SettingPage/>}/>

          {/* Teachers */}
          <Route path="/teachers" element={<TeachesPage/>}/>
          <Route path="/teachers/create-teacher" element={<CreateTeacherPage/>}/>
          <Route path="/teachers/:teacherId/edit" element={<UpdateTeacherPage/>}/>
          <Route path="/teachers/:teacherId" element={<TeacherDetail/>}/>

          {/* Parents */}
          <Route path="/parents" element={<ParentsPage/>}/>
          <Route path="/parents/create-parent" element={<CreateParentPage/>}/>
          <Route path="/parents/:parentId/edit" element={<UpdateParentPage/>}/>
          <Route path="/parents/:parentId" element={<ParentDetailPage/>}/>
          <Route path="/parents/:parentId/create-student" element={<AddStudentToParent/>}/>

          {/* Students */}
          <Route path="/students" element={<StudentsPage/>}/>

        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/auth/user-type" element={<SelectUserTypePage />} />
          <Route path="/auth/verification" element={<VerificationCodePage />} />
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
