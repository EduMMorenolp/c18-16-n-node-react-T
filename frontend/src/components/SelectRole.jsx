import React from 'react'

export default function SelectRole({roles, selectedRole, onRoleSelect}) {
 
  return (
    <div className="inline-flex -space-x-px overflow-hidden rounded-md border bg-white shadow-sm">
        {roles.map((role) => {
            const isSelected = role.id === selectedRole.id;
            const selectedClass = isSelected ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'hover:bg-blue-700';
            return (
            <div  
                key={role.id} 
                className={`inline-block px-6 py-2 text-sm font-bold text-gray-700  hover:bg-blue-700 hover:text-white focus:relative cursor-pointer ${selectedClass}`}
                onClick={() => onRoleSelect(role)}
            >
              {role.label}
            </div>
            )
          })}            
    </div>
  )
}
