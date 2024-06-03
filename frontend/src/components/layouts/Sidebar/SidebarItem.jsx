import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function SidebarItem({items}) {
  const location = useLocation()
  if (!items?.length) return null

  return (
    <div className='scroll-py-36 my-4 flex w-full flex-col gap-2 p-2 text-sm '>
       {items.map((item, index) => {
        if(!item.href){
          return (
            <span
              key={index}
              className="flex w-full cursor-not-allowed items-center rounded-md p-2  hover:underline"
            >
              {item.title}
            </span>
          )
        }
        return (
          <Link
            key={index}
            to={item.href}
            className={classNames(
              "group flex w-full items-center rounded-md border border-transparent px-2 py-1 text-sm font-medium",
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
                '-ml-0.5 mr-2 h-5 w-5'
            )}
            aria-hidden="true"
            />
            <span><span>{item.name}</span></span>
          </Link>
        )
       })}
    </div>
  )
}
