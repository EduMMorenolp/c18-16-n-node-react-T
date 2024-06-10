import { 
    ArrowRightEndOnRectangleIcon, 
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
        name: "Configuracion",
        href: "/setting",
        icon: Cog6ToothIcon,
    },
    {
        name: 'Cerrar Sesión',
        icon: ArrowRightEndOnRectangleIcon,
        onClick: 'logout',
    }
]
