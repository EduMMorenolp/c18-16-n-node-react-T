import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Eye, School } from 'lucide-react';
import { dashboardConfig } from '../../../config/dashboard';
import SidebarNav from './SidebarNav';

export default function Sidebar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.querySelector('aside').scrollTop;
      setIsScrolled(scrollTop > 100);
    };

    const aside = document.querySelector('aside');
    aside.addEventListener('scroll', handleScroll);

    return () => {
      aside.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <aside className="h-screen w-full top-0 z-30 hidden flex-col gap-4 border-r lg:sticky lg:block dark:bg-[#13446B] overflow-y-auto">
      <div className="sticky top-0 h-[3.56rem] items-center border-b px-4 lg:flex lg:px-6 bg-[#13446B] z-10">
        <Link
          to="/"
          className="flex w-fit items-center"
        >
          <p className="text-2xl mb-1 mx-16 font-extrabold dark:text-[#E44D15]">
            Edu
            <span className="dark:text-[#f7f2f2] font-extrabold">linker</span>
          </p>
          {/* <span className="text-2xl mb-1 mx-14 font-semibold text-white capitalize">Edulinker</span> */}
        </Link>
      </div>
      <div className={`sticky top-[3.56rem] flex flex-col gap-2.5 px-4 pt-2 lg:px-3 lg:pt-2 bg-[#13446B] z-10 ${isScrolled ? 'mt-8 shadow-xl' : ''}`}>
        <div className="flex flex-col gap-2.5 w-full text-center mt-6">
          <div className="relative m-auto w-20 h-20">
            <img
              src="https://tailus.io/sources/blocks/stats-cards/preview/images/second_user.webp"
              alt=""
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <div className="mt-[-2.3rem] p-2 bg-white rounded-md shadow-md w-full">
            <h3 className="text-sm font-semibold text-gray-800 mt-6">Institución Educativa Pepito Perez</h3>
            <div className="flex flex-1 items-center justify-end mt-1 mx-2">
              <button className="text-sm font-medium text-gray-800">
                <Eye className="size-4"/>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="px-3 py-2.5 lg:px-5">
        <SidebarNav items={dashboardConfig}/>
      </div>
    </aside>
  )
}
