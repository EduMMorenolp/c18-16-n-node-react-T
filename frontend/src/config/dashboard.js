import { Cog6ToothIcon, HomeIcon, UserGroupIcon, UserIcon } from '@heroicons/react/20/solid'
import { Users } from 'lucide-react';
export const dashboardConfig =  [
    {
        name: "Home",
        href: "/",
        icon: HomeIcon,
    },
    {
        name: "Usuarios",
        href: "/users",
        icon: UserIcon,
    },
    {
        name: "Profesores",
        href: "/teachers",
        icon: UserGroupIcon,
    },
    {
        name: "Alumnos",
        href: "/students",
        icon: Users,
    },
    {
        name: "Configuracion",
        href: "/setting",
        icon: Cog6ToothIcon,
    },
]
