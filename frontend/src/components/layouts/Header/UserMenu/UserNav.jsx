import React from "react"
import { Link } from 'react-router-dom'
import UserImage from "./UserImage";
import MenuItem from "./MenuItem";
import { useAuth } from "../../../../hooks/useAuth";


export default function UserNav() {
  const [isOpen, setIsOpen] = React.useState(false)
  const ref = React.useRef(null);
  const { logout, userInfo } = useAuth();
  const toggleOpen = React.useCallback(()=>{
    setIsOpen((prev) => !prev);
  }, [])

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div className="relative z-40" ref={ref}>
      <div className="flex flex-row items-center gap-3">
        <div className="flex flex-1 items-center justify-end">
          <div className='flex items-center space-x-8'>
            {true ? (
              <>
                <div 
                  onClick={toggleOpen}
                  className="inline-flex items-center gap-2 justify-center text-xl rounded-full cursor-pointer transition"
                >
                  <UserImage src={''}/>
                </div>
                  {isOpen && (
                    <div className="absolute right-0 z-20 w-56 py-2 mt-2 rounded-md shadow-md bg-white overflow-hidden  top-12 text-sm flex flex-col cursor-pointer">
                      <div className="mx-4 my-2 ">
                        <p className="text-sm font-semibold leading-none">{userInfo.name}</p>
                        <p className="text-sm leading-none text-muted-foreground mt-1">
                          {userInfo.email}
                        </p>
                      </div>
                      <hr className="-mx-1 my-1 h-px bg-muted"/>
                      <MenuItem 
                        onClick={()=>{
                          logout()
                          toggleOpen();
                        }}>
                          Cerrar sesión
                      </MenuItem>
                    </div>
                  )}
                </>
              ) : (
                <>
                  <Link href={'/login'} >
                    <span className='font-poppins font-semibold text-sm text-mulberry'>Inicia sesión</span>
                  </Link>
                  <button
                    className="px-4 py-[0.60rem] bg-btnBg-light hover:bg-btnBg-dark hover:shadow text-white rounded-xl my-0 mx-2 flex justify-center items-center relative box-border"
                  >
                    <ButtonM color='text-white'>Unirme a un evento</ButtonM>
                  </button>
                </>
              )}
          </div>
        </div>
      </div>
   </div>
  )
}