import { 
    ArrowRightEndOnRectangleIcon, 
    BellIcon, 
    CalendarDaysIcon, 
    Cog6ToothIcon, 
    HomeIcon 
} from '@heroicons/react/20/solid'


export const dashboardConfig =  [
    {
        name: "Home",
        href: "/",
        icon: HomeIcon,
    },
    {
        name: "Calendario",
        href: "#",
        icon: CalendarDaysIcon,
    },
    {
        name: "Notificaciones",
        href: "/notifications",
        icon: BellIcon,
    },
    {
        name: "Configuracion roles y permisos",
        href: "/setting",
        icon: Cog6ToothIcon,
    },
    {
        name: 'Cerrar Sesión',
        icon: ArrowRightEndOnRectangleIcon,
        onClick: 'logout',
    }
]
