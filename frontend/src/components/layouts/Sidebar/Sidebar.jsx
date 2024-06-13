import { Edit } from 'lucide-react';
import { dashboardConfig } from '../../../config/dashboard';
import SidebarNav from './SidebarNav';

export default function Sidebar() {
 
  return (
    <aside className="relative h-screen w-full top-0 z-30 hidden flex-col gap-4 border-r lg:sticky lg:block bg-sidebarBg-darkBlue overflow-y-auto">
      <div className="sticky top-0 z-20 p-3 bg-sidebarBg-darkBlue">
        <div className="flex flex-col gap-2.5 w-full text-center">
          <div className="relative m-auto w-20 h-20">
            <img
              src="/logo.png"
              alt=""
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <div className="mt-[-2.3rem] p-2 bg-white rounded-md shadow-md w-full">
            <h3 className="text-sm font-semibold text-gray-800 mt-6">Institución Educativa Pepito Perez</h3>
            <div className="flex flex-1 items-center justify-end mt-1 mx-2">
              <button className="text-sm font-medium text-gray-800">
                <Edit className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
        <div className="px-3 lg:px-5">
          <SidebarNav items={dashboardConfig} />
        </div>
    </aside>
  );
}
