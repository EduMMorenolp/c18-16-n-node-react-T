import React from 'react'
import { users } from '../../utils/users'
import { DetailTeacher, UpdateTeacher } from './Buttons'

export default function TableTeaches() {
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="overflow-hidden rounded-md bg-gray-200 p-2 md:pt-0">
            <table className="hidden min-w-full text-gray-900 md:table">
                <thead className="rounded-lg text-left text-sm font-normal">
                    <tr>
                        <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                            ID
                        </th>
                        <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                            Nombre
                        </th>
                        <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                            Apellidos
                        </th>
                        <th scope="col" className="px-3 py-5 font-medium">
                            Email
                        </th>
                        <th scope="col" className="px-3 py-5 font-medium">
                            Telefono
                        </th>
                        <th scope="col" className="relative py-3 pl-6 pr-3">
                        <span className="sr-only">Edit</span>
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white">
                {users.map((user) => (
                    <tr
                        key={user.id}
                        className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                    >
                        <td className="whitespace-nowrap bg-white py-5 pl-4 pr-3 text-sm text-black group-first-of-type:rounded-md group-last-of-type:rounded-md sm:pl-6">
                            {user.id}
                        </td>
                        <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                            {user.nombre}
                        </td>
                        <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                            {user.apellido}
                        </td>
                        <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                            {user.email}
                        </td>
                        <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                            {user.phone}
                        </td>
                        <td className="whitespace-nowrap py-3 pl-6 pr-3">
                            <div className="flex justify-end gap-3">
                                <UpdateTeacher id={user.id}/>
                                <DetailTeacher id={user.id}/>
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

{/* <table className="hidden min-w-full text-gray-900 md:table">
        <thead className="rounded-lg text-left text-sm font-normal">
            <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                    ID
                </th>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                    Nombre
                </th>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                    Apellidos
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                    Email
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                    Telefono
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
            </tr>
        </thead>
        <tbody className="bg-white">
        {users.map((user) => (
            <tr
                key={user.id}
                className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
            >
                <td className="whitespace-nowrap bg-white py-5 pl-4 pr-3 text-sm text-black group-first-of-type:rounded-md group-last-of-type:rounded-md sm:pl-6">
                    {user.id}
                </td>
                <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                    {user.nombre}
                </td>
                <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                    {user.apellido}
                </td>
                <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                    {user.email}
                </td>
                <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                    {user.phone}
                </td>
                <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                        <UpdateTeacher id={user.id}/>
                        <DetailTeacher id={user.id}/>
                    </div>
                </td>
            </tr>
        ))}
        </tbody>
     </table> */}
