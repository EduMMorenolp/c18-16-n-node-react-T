import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Navigate, Outlet } from 'react-router-dom';
import Sidebar from '../components/layouts/Sidebar/Sidebar';
import Header from '../components/layouts/Header/Header';
import { useAuth } from '../hooks/useAuth';
import Loading from '../components/Loading';


const AppLayout = () => {
  const { data, isError, isLoading } = useAuth()
    if(isLoading) return <Loading/>
    if(isError) {
        return <Navigate to='/auth/login' />
    }
    if(data) return (
      <>
        <div className="grid min-h-screen w-full lg:grid-cols-[17.5rem_1fr]">
          <Sidebar/>
          <div className="flex flex-col">
            <Header/>
            <div className="flex-1 overflow-hidden">
              <Outlet />
            </div>
          </div>
        </div>

        {/* //px-6 pt-6 */}
        <ToastContainer
            pauseOnHover={false}
            pauseOnFocusLoss={false}/>
      </>
    );
}

export default AppLayout;
