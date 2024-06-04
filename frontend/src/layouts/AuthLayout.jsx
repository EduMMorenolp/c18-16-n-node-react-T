import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
const AuthLayout = () => {
  return (
    <>
      <div className='bg-gradient-to-b from-[#0B61C6] from-10% dark:bg-[#041E3B] min-h-screen'>
        <div className='py-4 lg:py-6'>
          <div className='mt-2'>
            <Outlet />
          </div>
        </div>
      </div>
      <ToastContainer
        pauseOnHover={false}
        pauseOnFocusLoss={false}
      />
    </>
  )
}

export default AuthLayout
