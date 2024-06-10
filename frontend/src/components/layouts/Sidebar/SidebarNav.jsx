import React from 'react'
import SidebarItem from './SidebarItem'

export default function SidebarNav({ items }) {
  return (
    <div className="flex w-full flex-col gap-2 text-sm p-1 pt-2">
      <SidebarItem items={items}/>
    </div>
  )
}
