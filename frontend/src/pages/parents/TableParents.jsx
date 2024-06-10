import React from 'react'

export default function TableParents() {
  return (
    <div className="mt-6 flow-root">
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden rounded-md bg-gray-50 p-2 md:pt-0">
                <table className="hidden min-w-full rounded-md text-gray-900 md:table">
                    <thead className="rounded-md bg-gray-50 text-left text-sm font-normal">
                        <tr>
                            <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                                ID
                            </th>
                            <th scope="col" className="px-3 py-5 font-medium">
                                Nombre
                            </th>
                            <th scope="col" className="px-3 py-5 font-medium">
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
                       
                    </tbody>
                </table>
            </div>
        </div>
      </div>
    </div>
  )
}
