import { dashboardConfig } from "../../../config/dashboard";
import MobileMenu from "../Sidebar/MobileMenu";
import Notification from "./Notification/Notification";
import UserNav from "./UserMenu/UserNav";


export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-[#FFA726]">
      <div className="flex h-14 items-center px-6">
        <MobileMenu items={dashboardConfig}/>
        <h2 className="hidden text-lg font-bold text-gray-[#13446B] lg:block uppercase">Instituto Educativo Pepito Perez</h2>
        <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-3">
              <Notification/>
              <UserNav/>
            </nav>
        </div>
      </div>
    </header>
  );
}
