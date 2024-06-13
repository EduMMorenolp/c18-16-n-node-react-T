import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../../../hooks/useAuth';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function SidebarItem({items}) {
  const location = useLocation()
  const { logout } = useAuth();
  if (!items?.length) return null

  
  const handleClick = (onClick) => {
    if (onClick === 'logout') {
      logout();
    }
  };
  return (
    <div className='scroll-py-36 my-3 flex w-full flex-col gap-2 p-2 text-sm '>
       {items.map((item, index) => {
        if (!item.href && !item.onClick) {
          return (
            <span
              key={index}
              className="flex w-full cursor-not-allowed items-center rounded-md hover:underline"
            >
              {item.title}
            </span>
          )
        }
        if (item.onClick) {
          return(
            <span
              key={index}
              onClick={() => handleClick(item.onClick)}
              className="group flex w-full cursor-pointer items-center rounded-md border border-transparent px-2 py-2 text-sm font-bold text-gray-400 hover:text-gray-300"
            >
              <item.icon
                className="-ml-3.5 mr-3 h-6 w-6 text-gray-400 hover:text-gray-300"
                aria-hidden="true"
              />
              <span>{item.name}</span>
            </span>
          )
        }
        return (
          <Link
            key={index}
            to={item.href}
            className={classNames(
              "group flex w-full items-center rounded-md border border-transparent px-2 py-2 text-sm font-bold",
              location.pathname === item.href
              ? "text-white" 
              : 'text-gray-400 hover:text-gray-300',

            )}
          >
            <item.icon
               className={classNames(
                location.pathname === item.href 
                ? "text-white"  
                : 'text-gray-400 hover:text-gray-300',
                '-ml-3.5 mr-3 h-6 w-6'
            )}
            aria-hidden="true"
            />
            <span>{item.name}</span>
          </Link>
        )
       })}
       
    </div>
  )
}
