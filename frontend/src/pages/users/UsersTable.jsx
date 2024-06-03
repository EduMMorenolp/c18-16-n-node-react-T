import { EyeIcon, PencilSquareIcon } from '@heroicons/react/20/solid'
import React from 'react'
import { Link } from 'react-router-dom'

export default function UsersTable({users}) {
  return (
    <div className="mt-6 flow-root">
        <div className="inline-block min-w-full align-middle">
          <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
            <table className="hidden min-w-full text-gray-900 md:table">
              <thead className="rounded-lg text-left text-sm font-normal">
                <tr>
                    <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                        ID
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                        Nombre
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                        Email
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                        Estado
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                        Rol
                    </th>
                    <th scope="col" className="relative py-3 pl-6 pr-3">
                        <span className="sr-only">Edit</span>
                    </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {users.map((user) => (
                  <tr key={user.id} className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
                    <td className="whitespace-nowrap px-6 py-3 ">
                      {user.id}
                    </td>
                    <td className="whitespace-nowrap px-3 py-3 ">
                      {user.name}
                    </td>
                    <td className="whitespace-nowrap px-3 py-3 ">
                      {user.email}
                    </td>
                    <td className="whitespace-nowrap px-3 py-3 ">
                      {user.state}
                    </td>
                    <td className="whitespace-nowrap px-3 py-3 ">
                      {user.roles.name}
                    </td>
                    <td className="whitespace-nowrap py-3 pl-6 pr-3">
                      <div className="flex justify-end gap-3">
                        <Link
                          to={`/users/${user.id}/edit`}
                          className="rounded-md border p-2 hover:bg-gray-100"
                        >
                          <PencilSquareIcon className="size-4" />
                        </Link>
                        <Link
                          to={`/user-detail/${user.id}`}
                          className="rounded-md border p-2 hover:bg-gray-100"
                        >
                          <EyeIcon className="size-4" />
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
  )
}
